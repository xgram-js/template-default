import { Module } from "@xgram/main";
import { RootController } from "@/root.controller";
import { RootService } from "@/root.service";

@Module({
    controllers: [RootController],
    providers: [RootService]
})
export default class RootModule {}
