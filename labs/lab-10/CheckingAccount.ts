import BankingAccount from "./BankingAccount";

export default class CheckingAccount extends BankingAccount {

    constructor() {
        super();
        this.minimumBalance = 50;
    }

    public deposit(amount: number): void {
        this.validateAmount(amount);
        this.balance += amount;
    }

    public withdraw(amount: number): void {
        this.validateAmount(amount);
        let errMsg = "Checking account must have minimum balance as 50!";
        this.balance = this._withDraw(amount, errMsg);
    }

}