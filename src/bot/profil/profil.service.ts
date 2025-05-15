import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class ProfilService {
  constructor() {}

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
}
