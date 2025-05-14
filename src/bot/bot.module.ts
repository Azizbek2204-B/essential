import { Module } from '@nestjs/common';
import { BotService } from './bot.service';
import { BotUpdate } from './bot.update';
import { TestlarService } from './testlar/testlar.service';
import { TestlarUpdate } from './testlar/testlar.update';

@Module({
  controllers: [],
  providers: [BotService,TestlarService, TestlarUpdate, BotUpdate],
})
export class BotModule {}
