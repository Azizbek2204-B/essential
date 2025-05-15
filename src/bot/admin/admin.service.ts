import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class AdminService {
    constructor(){}

    async start(ctx: Context) {
        await ctx.replyWithHTML("Admin: @Azizbek_Bariyev",{
            ...Markup.keyboard([
                ["🏠 Asosiy menyu"]
            ])
            .resize()
            .oneTime()
        });
    }
}