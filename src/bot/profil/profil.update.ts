import { Hears, Update } from "nestjs-telegraf";
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
}
