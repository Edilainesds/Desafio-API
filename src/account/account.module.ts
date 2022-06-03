import { Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { AccountController } from "./account.controller";
import { AccountService } from "./account.service";

@Module({
    controllers: [AccountController],
    providers: [AccountService, PrismaClient]
})
export class AccountModule {}