export default abstract class BankingAccount {

    protected balance: number;
    protected minimumBalance: number;

    public getBalance(): number {
        return this.balance;
    }

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;

    protected withDraw(amount: number, errMsg: string): number {
        let draftBalance = this.balance - amount;
        if (draftBalance < this.minimumBalance) {
            throw new Error(errMsg);
        }
        this.balance = draftBalance;
        return draftBalance;
    }

}