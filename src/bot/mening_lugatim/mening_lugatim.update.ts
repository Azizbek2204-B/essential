import { Hears, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { MeningLugatimService } from "./mening_lugatim.service";

@Update()
export class MeningLugatimUpdate {
    constructor(
        private readonly meningLugatimService: MeningLugatimService
    ) {}

    @Hears("📕 Mening lug'atim")
    async start(ctx: Context) {
        this.meningLugatimService.start(ctx)
    }

    @Hears("qo'shish")
    async qoshish(ctx: Context) {
        this.meningLugatimService.qoshish(ctx)
    }
}