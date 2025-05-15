import { Hears, Update } from "nestjs-telegraf";
import { YuklabOlishService } from "./yuklab_olish.service";
import { Context } from "telegraf";

@Update()
export class YuklabOlishUpdate {
    constructor(
        private readonly yuklabOlishService: YuklabOlishService
    ) {}

    @Hears("⬇️ Yuklab olish")
    async start(ctx:Context){
        return this.yuklabOlishService.start(ctx)
    }
}