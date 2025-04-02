import BankingAccount from "./BankingAccount";

export default class SavingAccount extends BankingAccount {

    public deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        this.validateAmount(amount);
        let errMsg = "Checking account must have minimum balance as 0!";
        this.balance = this._withDraw(amount, errMsg);
    }

}