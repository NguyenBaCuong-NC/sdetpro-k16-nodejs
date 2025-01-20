const readline = require('readline-sync');

const accountBank1 = {
    accountNumber: "8888",
    accountName: "Teo",
    routingNumber: '1234',
    balance: 10000
}

const accountBank2 = JSON.parse(JSON.stringify(accountBank1));
accountBank2.accountNumber = '9999';
accountBank2.accountName = "Ti";
accountBank2.balance = 20000;
let isStillFindAccount = true;

while (isStillFindAccount) {
    printBankingApplication();
    let userOption = getUserOption();
    if (userOption === 0) {
        isStillFindAccount = false;
    } else if ((userOption === 1) || (userOption === 2)) {
        let userAccountNumber = getUserAccountNumber();
        if (isTrueAccountNumber(userAccountNumber)) {
            const userBank = findAccountNumber([accountBank1, accountBank2], userAccountNumber);
            const { accountName, balance } = userBank;
            if (userOption === 1) {
                console.log(`Account Name: ${accountName} and Balance: ${balance}`);
            } else {
                let theMoneyToWithdraw = getUserTheMoneyToWithdraw();
                if (theMoneyToWithdraw > balance || isNaN(theMoneyToWithdraw) || theMoneyToWithdraw <= 0) {
                    console.log(`You entered the wrong money to withdraw`);

                } else {
                    console.log(`balance: ${balance - theMoneyToWithdraw}`);
                }
            }
        } else {
            console.log(`You entered the wrong account number`);
        }
    } else {
        console.log(`You entered the wrong option`);
    }
}

function getUserOption() {
    return Number(readline.question('Please input your option: '));
}

function getUserAccountNumber() {
    return String(readline.question('Please input your account number: '));
}

function isTrueAccountNumber(String) {
    return String === accountBank1.accountNumber || String === accountBank2.accountNumber;
}

function getUserTheMoneyToWithdraw() {
    return Number(readline.question('Please input the money you want to withdraw: '));
}

function printBankingApplication() {
    console.log(`
           === Banking application ===
           1. Find an account
           2. Undate balance
           0. Exit the program
           `);
}

function findAccountNumber(accountbanks, number) {
    for (const accountbank of accountbanks) {
        if (number === accountbank.accountNumber) {
            return {
                accountName: accountbank.accountName,
                balance: accountbank.balance,
            }
        }
    }
}