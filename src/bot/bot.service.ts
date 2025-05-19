import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Context, Markup } from "telegraf";
import { Client } from "./models/client.model";

@Injectable()
export class BotService {
  constructor(
    @InjectModel(Client) private readonly clientModel: typeof Client
  ) {}

  async start(ctx: Context) {
    this.boshlangich(ctx, `Assalomu alaykum ${ctx.from!.first_name}`);
  }

  async boshlangich(ctx: Context, messageText: string) {
    await this.clientModel.create({
      name: ctx.from!.first_name
    })
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
