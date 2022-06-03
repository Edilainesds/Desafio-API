import { Injectable } from "@nestjs/common";
import { Account, PrismaClient } from "@prisma/client";
import { AccountRequest } from "./dto/request";

@Injectable()
export class AccountService {
    constructor(
        private database: PrismaClient
    ) {}

    public async create(data: AccountRequest): Promise<Account> {
        return this.database.account.create({ data });
    }

    public async getAll(): Promise<Account[]> {
        return this.database.account.findMany();
    }

    public async setBalance(id, balance: number) {
        const idInt = parseInt(id);
        const account = await this.database.account.findFirst({ 
            where: { id: idInt } 
        })

        const amount = account.balance + balance;

        return this.database.account.update({
            where: { id: idInt },
            data: { balance: amount }
        })
    }
}