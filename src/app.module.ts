import { Module } from "@nestjs/common";
import { BotModule } from "./bot/bot.module";
import { ConfigModule } from "@nestjs/config";
import { TelegrafModule } from "nestjs-telegraf";
import { SequelizeModule } from "@nestjs/sequelize";
import { Client } from "./bot/models/client.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    TelegrafModule.forRootAsync({
      useFactory: () => ({
        token: process.env.BOT_TOKEN!,
        middlewares: [],
        include: [BotModule],
      }),
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.PG_HOST,
      port: Number(process.env.PG_PORT),
      username: process.env.PG_USER,
      password: process.env.PG_PASSWORD,
      database: process.env.PG_DB,
      models: [Client],
      autoLoadModels: true,
      sync: { alter: true },
      logging: false,
    }),
    BotModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
