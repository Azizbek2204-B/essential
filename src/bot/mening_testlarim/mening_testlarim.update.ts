import { Hears, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { MeningTestlarimService } from "./mening_testlarim.service";

@Update()
export class MeningTestlarimUpdate {
    constructor (
        private readonly meningTestlarimService: MeningTestlarimService
    ) {}

    @Hears("📗 Mening testlarim")
    async start(ctx: Context) {
        return this.meningTestlarimService.start(ctx)
    }
}