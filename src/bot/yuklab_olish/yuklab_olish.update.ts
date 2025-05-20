import { Action, Hears, Update } from "nestjs-telegraf";
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

    @Action("word1")
    async word1(ctx:Context){
        this.yuklabOlishService.essentialBooks(ctx)
    }

    @Action("1")
    async book1(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "1")
    }

    @Action("2")
    async book2(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "2")
    }

    @Action("3")
    async book3(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "3")
    }

    @Action("4")
    async book4(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "4")
    }

    @Action("5")
    async book5(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "5")
    }

    @Action("6")
    async book6(ctx:Context){
        return this.yuklabOlishService.sendBook(ctx, "6")
    }
}