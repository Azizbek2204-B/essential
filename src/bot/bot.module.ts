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
import { TarjimaQilishService } from "./tarjima_qilish/tarjima_qilish.service";
import { TarjimaQilishUpdate } from "./tarjima_qilish/tarjima_qilish.update";
import { MeningTestlarimService } from "./mening_testlarim/mening_testlarim.service";
import { MeningLugatimService } from "./mening_lugatim/mening_lugatim.service";
import { MeningTestlarimUpdate } from "./mening_testlarim/mening_testlarim.update";
import { MeningLugatimUpdate } from "./mening_lugatim/mening_lugatim.update";
import { SequelizeModule } from "@nestjs/sequelize";
import { Client } from "./models/client.model";

@Module({
  imports:[SequelizeModule.forFeature([Client])],
  controllers: [],
  providers: [
    BotService,
    TestlarService,
    AdminService,
    ProfilService,
    YuklabOlishService,
    TarjimaQilishService,
    MeningLugatimService,
    MeningTestlarimService,
    MeningTestlarimUpdate,
    MeningLugatimUpdate,
    TarjimaQilishUpdate,
    ProfilUpdate,
    AdminUpdate,
    YuklabOlishUpdate,
    TestlarUpdate,
    BotUpdate,
  ],
})
export class BotModule {}
