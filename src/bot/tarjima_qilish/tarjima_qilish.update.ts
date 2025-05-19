import { Hears, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { TarjimaQilishService } from "./tarjima_qilish.service";

@Update()
export class TarjimaQilishUpdate {
    constructor(
        private readonly tarjimaQilishService: TarjimaQilishService
    ) {}

    @Hears("🌐 Tarjima qilish")
    async start(ctx: Context) {
        return this.tarjimaQilishService.start(ctx)
    }
}