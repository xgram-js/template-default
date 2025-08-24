import {exec} from "node:child_process";
import * as fs from "node:fs";
import path from "node:path";

export default function prettier({cwd, installPackage}) {
    const templateDir = path.join(cwd, ".xgram-template");
    [
        {name: "prettier", type: "dev"},
        {name: "@trivago/prettier-plugin-sort-imports", type: "dev"},
        {name: "prettier-plugin-unused-imports-configurable", type: "dev"}
    ].map(p => installPackage(p, cwd))
    fs.copyFileSync(path.join(templateDir, "prettier", ".prettierrc"), cwd);

    const packageJsonPath = path.join(cwd, "package.json")
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
    packageJson.scripts.style = "prettier . --write"
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, undefined, 2));
}
