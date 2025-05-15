import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class BotService {
  constructor() {}

  async start(ctx: Context) {
    this.boshlangich(ctx, `Assalomu alaykum ${ctx.from!.first_name}`);
  }

  async boshlangich(ctx: Context, messageText: string) {
    await ctx.replyWithHTML(messageText, {
      ...Markup.keyboard([
        ["♻️ Testlar", "📕 Mening lug'atim"],
        ["🌐 Tarjima qilish", "📗 Mening testlarim"],
        ["⬇️ Yuklab olish", "👤 Profil"],
        ["Admin bilan bog'lanish"],
      ])
      .oneTime()
      .resize()
    });
  }
}
