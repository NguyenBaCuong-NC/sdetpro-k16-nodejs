import BankingAccount from "./BankingAccount";

export default class SavingsAccount extends BankingAccount {

    constructor(accountName: string, balance: number) {
        super(accountName, balance);
    }

    public deposit(amount: number): void {
        if (amount <= 0) {
            throw new Error("The deposit amount must be greater than 0!")
        }
        this.balance = this.balance + amount;
    }

    public withdraw(): void {
        throw new Error("Error!");
    }

}