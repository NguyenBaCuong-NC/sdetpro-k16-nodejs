/*
 . Creating another Bank Account Object which clone from the previous one and update the accountNumber only . Put them into ann array call: bankAccounts

 . Write a consolse interface app to:

 allow user to find account by using accountNumber, if the account is existing, print the name and balance info out (NOT all the object)
 allow user to withdraw the money and avoid user to take more than current balance
 Note: Strongly recommend to create functions to process each tasks
 === Banking application===
 1. Find an account
 2. Update balance
// 0. Exit the program
*/

const readline = require('readline-sync');

const account1 = {
    accountNumber: "8888",
    accountName: "Teo",
    routingNumber: '1234',
    balance: 10000
};
console.log(account1.balance);
const account2 = JSON.parse(JSON.stringify(account1));
account2.accountNumber = '9999';
account2.accountName = "Ti";
account2.balance = 20000;

let accounts = [account1, account2]

bankApp();

function bankApp() {
    let isInteracting = true;
    while (isInteracting) {
        printTheAppMenu();
        let userOption = getUserOption();
        switch (userOption) {
            case 0:
                console.log('See you next time!');
                isInteracting = false;
                break;
            case 1:
                const foundAccount = findAccount();
                if (foundAccount.accountNumber) {
                    const { accountName, balance } = foundAccount;
                    console.log(`Your account name: ${accountName}, your balance: ${balance}`);
                } else {
                    console.log('Account not found');
                }
                break;
            case 2:
                updateBalance();
                break;
            default:
                console.log('Wrong Option');
                break;
        }
    }
}

function printTheAppMenu() {
    console.log(`
           === Banking application ===
           1. Find an account
           2. Undate balance
           0. Exit the program
           `);
}

function getUserOption() {
    return Number(readline.question('Please select an option: '));
}

function findAccount() {
    let foundAcount = {};
    let inputAccountNumber = String(readline.question('Please enter your account number: '));
    for (const account of accounts) {
        if (inputAccountNumber === account.accountNumber) {
            foundAcount = account;
            break;
        }
    }
    return foundAcount;
}


function updateBalance() {

    let attemps = 0;
    const MAX_ALLOWED_ATTEMPT = 3;
    do {
        const foundAccount = findAccount();
        const isNotFound = foundAccount.accountNumber === undefined;

        if (isNotFound) {
            console.log(`Attemp time: ${attemps + 1}`);
            attemps++;
        } else {
            const { balance } = foundAccount;
            console.log(`Your balance is: ${balance}`)
            const expectedWhidrawMoney = Number(readline.question('Please input withdraw amount: '));
            if (expectedWhidrawMoney > balance) {
                console.log('Insufficient balance!');
                attemps = MAX_ALLOWED_ATTEMPT;
            } else {
                console.log('Succeed!2');
                foundAccount.balance = balance - expectedWhidrawMoney;
                attemps = MAX_ALLOWED_ATTEMPT;
            }
        }
    } while (attemps < MAX_ALLOWED_ATTEMPT);
}



