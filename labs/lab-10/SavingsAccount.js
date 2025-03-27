"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BankingAccount_1 = require("./BankingAccount");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountName, balance) {
        return _super.call(this, accountName, balance) || this;
    }
    SavingsAccount.prototype.deposit = function (amount) {
        if (amount <= 0) {
            throw new Error("The deposit amount must be greater than 0!");
        }
        this.balance = this.balance + amount;
    };
    SavingsAccount.prototype.withdraw = function () {
    };
    return SavingsAccount;
}(BankingAccount_1.default));
exports.default = SavingsAccount;
