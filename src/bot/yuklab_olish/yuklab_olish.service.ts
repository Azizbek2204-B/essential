import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class YuklabOlishService {
  constructor() {}

  async start(ctx: Context) {
    await ctx.replyWithHTML("⏳ Qaysi kitobni yuklab olmoqchisiz...", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📘 4000 Essential English Words",
              callback_data: "testlar",
            },
          ],
          [
            {
              text: "🔙Orqaga",
              callback_data: "start",
            }
          ]
        ],
      },
    });
  }
}