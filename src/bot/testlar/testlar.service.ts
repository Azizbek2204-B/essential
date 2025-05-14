import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";
import { BotService } from "../bot.service";

@Injectable()
export class TestlarService {
  constructor(
    private readonly botService: BotService
  ) {}

  async start(ctx: Context) {
    await ctx.replyWithHTML(
      `♻️ Testlar - Bu lug'atlaringizni quiz va yozish rejimlari orqali yodlashga yordam beradigan xizmatdir.

- botga avvaldan qo'shilgan lug'at kitoblardan
- "📕 Mening lug'atim" bo'limiga qo'shgan lug'atlaringizdan
- "📗 Mening testlarim" bo'limiga qo'shgan testlaringizdan
- guruhlarda va shaxsiy chatlarda

botdan foydalaning va lug'atlaringizni hech kimning yordamisiz yodlang!

⏳ Quyidagi bo'limlardan biri uchun savollar ro'yxatini tanlang va testni boshlang!`,
      {
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
                text: `♻️ My Tests`,
                callback_data: "mening_testlarim",
              },
            ],
            [
              {
                text: `Irregular Verbs`,
                callback_data: "noto'g'ri fellar",
              },
            ],
            [
              {
                text: `📘 5000 Words in a month`,
                callback_data: "testlar2",
              },
            ],
            [
              {
                text: `🏠 Asosiy menyu`,
                callback_data: "start",
              },
            ],
          ],
        },
      }
    );
  }

  async testlar(ctx: Context) {
    const contextMessage = ctx.callbackQuery!["testlar"];
    await ctx.deleteMessage(contextMessage?.message_id);

    await ctx.replyWithHTML(
      `📘 4000 Essential English Words

🖊 0 savollar
💬 Quiz mode
🔁 Word EN — Word UZ
⏱️ Har bir savolga 30 sec

⌛️ Unit'larni tanlash orqali savollar ro'yxatini shakllantiring!`,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Unit 1",
                callback_data: "unit1",
              },
              {
                text: "Unit 2",
                callback_data: "unit2",
              },
              {
                text: "Unit 3",
                callback_data: "unit3",
              },
            ],
            [
              {
                text: "Unit 4",
                callback_data: "unit4",
              },
              {
                text: "Unit 5",
                callback_data: "unit5",
              },
              {
                text: "Unit 6",
                callback_data: "unit6",
              },
            ],
            [
              {
                text: "Unit 7",
                callback_data: "unit7",
              },
              {
                text: "Unit 8",
                callback_data: "unit8",
              },
              {
                text: "Unit 9",
                callback_data: "unit9",
              },
            ],
            [
              {
                text: "Unit 10",
                callback_data: "unit10",
              },
              {
                text: "Unit 11",
                callback_data: "unit11",
              },
              {
                text: "Unit 12",
                callback_data: "unit12",
              },
            ],
            [
              {
                text: "Unit 13",
                callback_data: "unit13",
              },
              {
                text: "Unit 14",
                callback_data: "unit14",
              },
              {
                text: "Unit 15",
                callback_data: "unit15",
              },
            ],
            [
              {
                text: "Unit 16",
                callback_data: "unit16",
              },
              {
                text: "Unit 17",
                callback_data: "unit17",
              },
              {
                text: "Unit 18",
                callback_data: "unit18",
              },
            ],
            [
              {
                text: "Unit 19",
                callback_data: "unit19",
              },
              {
                text: "Unit 20",
                callback_data: "unit20",
              },
              {
                text: "Unit 21",
                callback_data: "unit21",
              },
            ],
            [
              {
                text: "Unit 22",
                callback_data: "unit22",
              },
              {
                text: "Unit 23",
                callback_data: "unit23",
              },
              {
                text: "Unit 24",
                callback_data: "unit24",
              },
            ],
            [
              {
                text: "Unit 25",
                callback_data: "unit25",
              },
              {
                text: "Unit 26",
                callback_data: "unit26",
              },
              {
                text: "Unit 27",
                callback_data: "unit27",
              },
            ],
            [
              {
                text: "Unit 28",
                callback_data: "unit28",
              },
              {
                text: "Unit 29",
                callback_data: "unit29",
              },
              {
                text: "Unit 30",
                callback_data: "unit30",
              },
            ],
            [
              {
                text: "⬅️",
                callback_data: "oldingisi",
              },
              {
                text: "Book 1",
                callback_data: "book1",
              },
              {
                text: "➡️",
                callback_data: "keyingisi",
              },
            ],
            [
                {
                text: "Sozlamalar",
                callback_data: "sozlamalar",
              },
              {
                text: "▶️Boshlash",
                callback_data: "boshlash",
              },
            ],
            [
              {
                text: "🔙Orqaga",
                callback_data: "orqaga",
              },
            ]
          ],
        },
      }
    );
  }

  async orqaga(ctx: Context){
    const contextMessage = ctx.callbackQuery!["testlar"];
    await ctx.deleteMessage(contextMessage?.message_id);
    this.start(ctx)
  }

  async boshlangich(ctx: Context){
    const contextMessage = ctx.callbackQuery!["start"];
    await ctx.deleteMessage(contextMessage?.message_id);
    this.botService.boshlangich(ctx, `🏠 Asosiy menyu`)
  }
}
