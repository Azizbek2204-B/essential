import { Action, Hears, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { TestlarService } from "./testlar.service";


@Update()
export class TestlarUpdate {
    constructor(
        private readonly testlarService: TestlarService
    ){}

    @Hears("♻️ Testlar")
    async start(ctx:Context) {
        return this.testlarService.start(ctx)
    }

    @Action("testlar")
    async testlar(ctx:Context) {
        return this.testlarService.testlar(ctx)
    }

    @Action("orqaga")
    async orqaga(ctx:Context) {
        return this.testlarService.orqaga(ctx)
    }

    @Action("start")
    async boshlangich(ctx:Context) {
        return this.testlarService.boshlangich(ctx)
    }
}