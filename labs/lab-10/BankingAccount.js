"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount = /** @class */ (function () {
    function BankingAccount(accountName, balance) {
        this.accountName = accountName;
        this.balance = balance;
    }
    BankingAccount.prototype.getAcountName = function () {
        return this.accountName;
    };
    BankingAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankingAccount;
}());
exports.default = BankingAccount;
