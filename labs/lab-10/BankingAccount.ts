export default abstract class BankingAccount {

    protected balance: number = 0;
    protected minimumBalance: number = 0;

    public getBalance(): number {
        return this.balance;
    }

    protected abstract deposit(amount: number): void;
    protected abstract withdraw(amount: number): void;

    protected _withDraw(amount: number, errMsg: string): number {
        let draftBalance = this.balance - amount;
        if (draftBalance < this.minimumBalance) {
            throw new Error(errMsg);
        }
        this.balance = draftBalance;
        return this.balance;
    }

    protected validateAmount(amount: number) {
        if (amount <= 0) {
            throw new Error("The amount must be greater than 0!");
        }
    }

}