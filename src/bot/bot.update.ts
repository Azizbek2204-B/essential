import { Action, Hears, Start, Update } from "nestjs-telegraf";
import { BotService } from "./bot.service";
import { Context } from "telegraf";

@Update()
export class BotUpdate {
    constructor(
        private readonly botService: BotService
    ){}

    @Start()
    async start(ctx) {
        await this.botService.start(ctx);
    }

    @Hears("🏠 Asosiy menyu")
    @Action("start")
    async boshlangich(ctx:Context) {
        this.botService.boshlangich(ctx, `🏠 Asosiy menyu`);
    }
}