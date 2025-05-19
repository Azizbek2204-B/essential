import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Context, Markup } from "telegraf";
import { Client } from "../models/client.model";

@Injectable()
export class ProfilService {
  constructor(
    @InjectModel(Client) private readonly clientModel: typeof Client
  ) {}

  async start(ctx: Context) {
    await ctx.replyWithHTML(
      "⚙️ Profil sozlamalaringizni o'zgartirishingiz mumkin...",
      {
        ...Markup.keyboard([
          ["📝 Ma'lumotlarim", "♻️ Mening obunam"],
          ["🔗 Taklif havolam", "📤 Test yuborish"],
          ["🏠 Asosiy menyu"],
        ])
          .oneTime()
          .resize(),
      }
    );
  }

  async malumotlarim(ctx: Context) {
    const id = ctx.from!.id
    const client = await this.clientModel.findOne({
      where:{
        id
      }
    });
    console.log(client);
    await ctx.replyWithHTML(
      `${client}`
    )
  }
}
