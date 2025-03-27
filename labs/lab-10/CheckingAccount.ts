import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {

    constructor(accountName: string, balance: number) {
        super(accountName, balance);
    }

    public deposit(): void {
        throw new Error("Error!")
    }

    public withdraw(amount: number): void {
        if (amount <= 0) {
            throw new Error("The withdrawal amount must be greater than 0!")
        }
        if (this.balance - amount < 50) {
            throw new Error("Your account balance is insufficient!");
        }
        this.balance = this.balance - amount;
    }

}