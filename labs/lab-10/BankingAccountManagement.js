"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CheckingAccount_1 = require("./CheckingAccount");
var SavingAccount_1 = require("./SavingAccount");
var savingAcc = new SavingAccount_1.default();
var checkingAcc = new CheckingAccount_1.default();
savingAcc.deposit(500);
savingAcc.withdraw(100);
console.log("Saving account balance: ".concat(savingAcc.getBalance()));
checkingAcc.deposit(500);
checkingAcc.withdraw(100);
console.log("Checking account balance: ".concat(checkingAcc.getBalance()));
