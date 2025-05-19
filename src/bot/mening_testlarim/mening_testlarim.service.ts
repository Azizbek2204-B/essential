import { Injectable } from "@nestjs/common";
import { Context } from "telegraf";

@Injectable()
export class MeningTestlarimService {
  constructor() {}

  async start(ctx: Context) {
    await ctx.replyWithHTML(`📗 Mening testlarim - Bu shaxsiy testlaringizni quiz test va savol-javob usullari orqali yodlash uchun ularni botga qo'shishga yordamlashuvchi xizmatdir.

➕ Qo'shish - Lug'atlaringiz uchun yangi nomdagi to'plamlaringizni qo'shing!

➖ O'chirish - O'chirish rejimiga o'ting va to'plamlaringizni o'chiring!

⏳ Qo'shilgan to'plamlar ustiga bosing va to'plamga doir testlarni qo'shing!`,{
    reply_markup:{
        inline_keyboard:[
            [
                {
                    text:"1.8B(0 tests)",
                    callback_data:"testlar"
                }
            ],
            [
                {
                    text:"➕ Qo'shish",
                    callback_data:"qo'shish"
                },
                {
                    text:"➖ O'chirish",
                    callback_data:"o'chirish"
                }
            ],
            [
                {
                    text:"🏠 Asosiy menyu",
                    callback_data:"start"
                }
            ]
        ]
    }
});
  }
}
