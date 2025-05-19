import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class TarjimaQilishService {
    constructor () {}
    async start(ctx: Context) {
        await ctx.replyWithHTML("⏳ So'z yoki matn kiriting...",{
            ...Markup.keyboard([
                ["♻️ Tarjima tillari (English => Uzbek)"],
                ["➕ Avtomatik qo'shish ❌"],
                ["🏠 Asosiy menyu"]
            ])
            .resize()
        })
    }
}