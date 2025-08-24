import * as fs from "node:fs";
import path from "node:path";

export default async function prettier({ cwd, installPackage }) {
    const templateDir = path.join(cwd, ".xgram-template");
    await installPackage(
        [
            { name: "prettier", type: "dev" },
            { name: "@trivago/prettier-plugin-sort-imports", type: "dev" },
            { name: "prettier-plugin-unused-imports-configurable", type: "dev" }
        ],
        cwd
    );
    fs.appendFileSync(
        path.join(cwd, ".prettierrc"),
        fs.readFileSync(path.join(templateDir, "prettier", ".prettierrc"), "utf-8")
    );

    const packageJsonPath = path.join(cwd, "package.json");
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.scripts.style = "prettier . --write";
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, 2));
}
