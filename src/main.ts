import BotFactory from "@xgram/main";
import RootModule from "./root.module";
import {configDotenv} from "dotenv";

async function bootstrap() {
    configDotenv()
    const token = process.env.BOT_TOKEN
    if (!token) throw new Error("No bot token provided. Check your .env")
    const bot = BotFactory.create(RootModule, {token: token})
}

void bootstrap();
