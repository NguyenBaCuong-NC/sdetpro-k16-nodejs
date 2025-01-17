const readline = require('readline-sync');

const accountBank1 = {
    accountNumber: "8888",
    accountName: "Teo",
    routingNumber: '1234',
    balance: 10000
}

const accountBank2 = JSON.parse(JSON.stringify(accountBank1));
accountBank2.accountNumber = '9999';
accountBank2.balance = 20000;

let userAccountNumber = getUserAccountNumber();
while (userAccountNumber !== accountBank1.accountNumber && userAccountNumber !== accountBank2.accountNumber) {
    console.log(`You entered the wrong account number`);

    userAccountNumber = getUserAccountNumber();
}
const userBank = findAccountNumber([accountBank1, accountBank2]);
const { accountName, balance } = userBank;
let isStillFindAccount = true;
while (isStillFindAccount) {
    printBankingApplication();
    let userOption = getUserOption();

    if (userOption === 0) {
        isStillFindAccount = false;
    } else if (userOption === 1) {
        console.log(`Account Name: ${accountName} and Balance: ${balance}`);
    } else if (userOption === 2) {
        let theMoneyToWithdraw = getUserTheMoneyToWithdraw();
        if (theMoneyToWithdraw > balance) {
            console.log(`Your account balance is insufficient`);

        } else {
            console.log(`balance: ${balance - theMoneyToWithdraw}`);
        }
    } else {
        console.log(`You entered the wrong option`);

    }
}

function getUserAccountNumber() {
    return String(readline.question('Please input your account number: '));
}

function getUserTheMoneyToWithdraw() {
    return Number(readline.question('Please input the money you want to withdraw: '));
}

function getUserOption() {
    return Number(readline.question('Please input your option: '));
}

function printBankingApplication() {
    console.log(`
           === Banking application ===
           1. Find an account
           2. Undate balance
           0. Exit the program
           `);
}

function findAccountNumber(accountbanks) {
    let currentAccountBank = accountbanks[0];
    let curentAccountNumber = currentAccountBank.accountNumber;

    for (const accountbank of accountbanks) {
        if (userAccountNumber === curentAccountNumber) {
            currentAccountBank = accountbank;
        }
    }
    return {
        accountName: currentAccountBank.accountName,
        balance: currentAccountBank.balance,
    }
}

