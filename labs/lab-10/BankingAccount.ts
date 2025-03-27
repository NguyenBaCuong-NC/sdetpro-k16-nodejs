export default abstract class BankingAccount {

    protected accountName: string;
    protected balance: number;

    constructor(accountName: string, balance: number) {
        this.accountName = accountName;
        this.balance = balance;
    }

    public getAcountName(): string {
        return this.accountName;
    }

    public getBalance(): number {
        return this.balance;
    }

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;

}