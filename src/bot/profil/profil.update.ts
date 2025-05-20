import { Action, Hears, On, Update } from "nestjs-telegraf";
import { ProfilService } from "./profil.service";
import { Context } from "telegraf";

@Update()
export class ProfilUpdate {
  constructor(private readonly profilService: ProfilService) {}

  @Hears("👤 Profil")
  async start(ctx: Context) {
    return this.profilService.start(ctx);
  }

  @Hears("📝 Ma'lumotlarim")
  async malumotlarim(ctx: Context) {
    return this.profilService.malumotlarim(ctx);
  }

  // @Action("name")
  // async name(ctx: Context) {
  //   return this.profilService.name(ctx);
  // }

  @Action("phone")
  async phone(ctx: Context) {
    return this.profilService.phone(ctx);
  }

  @On("contact")
  async contact(ctx: Context) {
    return this.profilService.contact(ctx);
  }

  @Action("lang")
  async lang(ctx: Context) {
    return this.profilService.lang(ctx);
  }

  @Hears("🔗 Taklif havolam")
  async offer_link(ctx: Context) {
    return this.profilService.offer_link(ctx);
  }
}
