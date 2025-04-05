import BankingAccount from "./BankingAccount"
import CheckingAccount from "./CheckingAccount"
import SavingAccount from "./SavingAccount"

const savingAcc = new SavingAccount();
const checkingAcc = new CheckingAccount();

savingAcc.deposit(500);
savingAcc.withdraw(100);
console.log(`Saving account balance: ${savingAcc.getBalance()}`);

checkingAcc.deposit(500);
checkingAcc.withdraw(100);
console.log(`Checking account balance: ${checkingAcc.getBalance()}`);
