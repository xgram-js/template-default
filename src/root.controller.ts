import { Controller, Command, CommandContext } from "@xgram/main";
import { RootService } from "@/root.service";

@Controller()
export class RootController {
    constructor(private readonly rootService: RootService) {}

    @Command("start")
    async start(ctx: CommandContext) {
        await ctx.reply(this.rootService.getHelloWorld());
    }
}
