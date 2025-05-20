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
    const id = ctx.from!.id
    const client = await this.clientModel.findOne({where: {id_telegram: id}})
    if (client == null) {
      await this.clientModel.create({
        name: ctx.from!.first_name,
        id_telegram: id
      });
    }
    await ctx.replyWithHTML(messageText, {
      ...Markup.keyboard([
        ["♻️ Testlar", "📕 Mening lug'atim"],
        ["🌐 Tarjima qilish", "📗 Mening testlarim"],
        ["⬇️ Yuklab olish", "👤 Profil"],
        ["Admin bilan bog'lanish"],
      ])
        .oneTime()
        .resize(),
    });
  }
}
