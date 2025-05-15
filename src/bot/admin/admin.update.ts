import { Hears, Update } from "nestjs-telegraf";
import { Context } from "telegraf";
import { AdminService } from "./admin.service";

@Update()
export class AdminUpdate {
    constructor(
        private readonly adminService: AdminService
    ) {}

    @Hears("Admin bilan bog'lanish")
    async admin(ctx: Context) {
        this.adminService.start(ctx)
    }
}