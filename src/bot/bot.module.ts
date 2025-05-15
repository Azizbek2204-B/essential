import { Module } from "@nestjs/common";
import { BotService } from "./bot.service";
import { BotUpdate } from "./bot.update";
import { TestlarService } from "./testlar/testlar.service";
import { TestlarUpdate } from "./testlar/testlar.update";
import { AdminUpdate } from "./admin/admin.update";
import { YuklabOlishUpdate } from "./yuklab_olish/yuklab_olish.update";
import { AdminService } from "./admin/admin.service";
import { ProfilUpdate } from "./profil/profil.update";
import { ProfilService } from "./profil/profil.service";
import { YuklabOlishService } from "./yuklab_olish/yuklab_olish.service";

@Module({
  controllers: [],
  providers: [
    BotService,
    TestlarService,
    AdminService,
    ProfilService,
    YuklabOlishService,
    ProfilUpdate,
    AdminUpdate,
    YuklabOlishUpdate,
    TestlarUpdate,
    BotUpdate,
  ],
})
export class BotModule {}
