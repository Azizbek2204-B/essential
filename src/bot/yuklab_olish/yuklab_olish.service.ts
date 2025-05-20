import { Injectable } from "@nestjs/common";
import { Context, Markup } from "telegraf";
import * as path from "path";
import * as fs from "fs";

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
              callback_data: "word1",
            },
          ],
          [
            {
              text: "🔙Orqaga",
              callback_data: "start",
            },
          ],
        ],
      },
    });
  }

  async essentialBooks(ctx: Context) {
    await ctx.replyWithHTML("⏳ Qaysi kitobni yuklab olmoqchisiz...", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "📘 Book 1",
              callback_data: "1",
            },
            {
              text: "📘 Book 2",
              callback_data: "2",
            },
            {
              text: "📘 Book 3",
              callback_data: "3",
            },
          ],
          [
            {
              text: "📘 Book 4",
              callback_data: "4",
            },
            {
              text: "📘 Book 5",
              callback_data: "5",
            },
            {
              text: "📘 Book 6",
              callback_data: "6",
            },
          ],
          [
            {
              text: "🔙Orqaga",
              callback_data: "start",
            },
          ],
        ],
      },
    });
  }

  async sendBook(ctx: Context, book_number: string) {
    const fileName = `4000_Essential_English_words_${book_number}.pdf`;
    const filePath = path.resolve(process.cwd(), "src", "books", fileName);
    if (!fs.existsSync(filePath)) {
      await ctx.reply("❌ Kechirasiz, bu kitob mavjud emas.");
      return;
    }

    try {
      await ctx.replyWithDocument({ source: filePath, filename: fileName });
    } catch (error) {
      console.error("Faylni yuborishda xatolik:", error);
      await ctx.reply(
        "❌ Kitobni yuborishda muammo yuz berdi. Iltimos, keyinroq qayta urinib ko‘ring.",
      );
    }
  }
}
