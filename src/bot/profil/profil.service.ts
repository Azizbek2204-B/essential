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
          .resize(),
      }
    );
  }

  async malumotlarim(ctx: Context) {
    const id = ctx.from!.id;
    const client = await this.clientModel.findOne({
      where: { id_telegram: id },
    });

    const name = client?.name ?? "❌";
    const phone = client?.phone_number ?? "❌";
    const proposer = client?.proposer ?? "❌";
    const coins = client?.coins ?? "❌";

    await ctx.replyWithHTML(
      `📝 Ma'lumotlarim (${coins})

👤 Ism: ${name}
📞 Telefon raqam: ${phone}
🌐 Bot tili: 🇺🇿 O'zbek
🔗 Taklif qilingan: ${proposer}

🔄 Ma'lumotlaringizni o'zgartirishingiz mumkin...`,
      {
        reply_markup: {
          inline_keyboard: [
            // [
            //   {
            //     text: "✏️ Ismni o'zgartirish",
            //     callback_data: "name",
            //   },
            // ],
            [
              {
                text: "📞 Telefon raqamni o'zgartirish",
                callback_data: "phone",
              },
            ],
            [
              {
                text: "🌐 Tilni o'zgartirish",
                callback_data: "lang",
              },
            ],
          ],
        },
      }
    );
  }

//   async name(ctx: Context) {
//     await ctx.replyWithHTML(
//       `✏️ Iltimos, ismingizni kiriting...

// ♻️ Bu ism bot uchun foydalaniladi.`,
//       {
//         ...Markup.keyboard([["🚫 Ism bo'sh qolsin"]])
//           .resize()
//           .oneTime(),
//       }
//     );
//   }

  async phone(ctx: Context) {
    await ctx.replyWithHTML(
      `📞 Iltimos, telefon raqamingizni kiriting...`,
      {
        ...Markup.keyboard([[
          Markup.button.contactRequest("📞 Telefon raqamni yuborish")
        ]])
          .resize()
          .oneTime(),
      }
    );
  }

  async contact(ctx: Context) {
    try {
      const user_id = ctx.from?.id;
      const client = await this.clientModel.findOne({ where: { id_telegram: user_id } });
      if (client) {
        if ("contact" in ctx.message!) {
          let phone = ctx.message.contact.phone_number;
          if (phone[0] != "+") {
            phone = "+" + phone;
          }
          client.phone_number = phone;
          await client.save();
          this.malumotlarim(ctx);
        }
      }
    } catch (error) {
      console.log(`Error on method "onContact"`, error);
    }
  }

  async lang(ctx: Context) {
    await ctx.replyWithHTML(
      `🌐 Iltimos, tilni tanlang...`,
      {
        ...Markup.keyboard([["🇺🇿 O'zbek", "🇷🇺 Русский", "🇺🇸 English"]])
          .resize()
          .oneTime(),
      }
    );
  }

  async offer_link(ctx: Context) {
    const id = ctx.from?.id
    await ctx.replyWithHTML(`🔗 Sizning taklif havolangiz
https://t.me/engessential_bot?start=${id}

1. 📢 Botni tanishlaringizga "Ulashish" tugmasi orqali ulashing.
2. 🎁 Har bir muvaffaqiyatli taklif uchun 5 coins bonus oling.`)
  }
}
