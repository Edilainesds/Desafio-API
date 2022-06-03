import { Body, Controller, Get, Post, Patch, Param } from "@nestjs/common";
import { AccountService } from "./account.service";
import { AccountRequest } from "./dto/request";

@Controller('account')
export class AccountController {
    constructor(
        private accountService: AccountService,
    ) {}

    @Get()
    public async getAll() {
        return this.accountService.getAll();
    }

    @Post('create')
    public async create(
        @Body() data: AccountRequest,
    ) {
        return this.accountService.create(data);
    }

    @Patch('balance/:id')
    public async updateBalance(
        @Param('id') id: number,
        @Body() body: { balance: number }
    ) {
        return this.accountService.setBalance(id, body.balance)
    }

}