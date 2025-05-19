import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";

@Injectable()
export class MeningLugatimService {
  constructor() {}
  async start(ctx: Context) {
    await ctx.replyWithHTML(
      `📕 📕 Mening lug'atim - Bu shaxsiy lug'atlaringizni quiz test va savol-javob usullari orqali yodlash uchun ularni botga qo'shishga yordamlashuvchi xizmatdir.

➕ Qo'shish - Lug'atlaringiz uchun yangi nomdagi to'plamlaringizni qo'shing!

➖ O'chirish - O'chirish rejimiga o'ting va to'plamlaringizni o'chiring!

⏳ Qo'shilgan to'plamlar ustiga bosing va to'plamga doir lug'atlarni qo'shing!`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "➕ Qo'shish",
                callback_data: "qo'shish",
              },
              {
                text: "➖ O'chirish",
                callback_data: "o'chirish",
              },
            ],
            [
              {
                text: "🏠 Asosiy menyu",
                callback_data: "start",
              },
            ]
          ],
        },
      }
    );
  }

  async qoshish(ctx: Context) {
    await ctx.replyWithHTML(`✏️ Lug'atlar to'plamingiz uchun nom kiriting...

Masalan, “1-dars lug'atlari” yoki “Ranglar”`,{
    ...Markup.keyboard([
        ["❌Bekor qilish"]
    ])
    .resize()
    .oneTime()
})
  }
}
