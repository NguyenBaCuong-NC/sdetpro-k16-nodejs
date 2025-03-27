import BankingAccount from "./BankingAccount"
import CheckingAccount from "./CheckingAccount"
import SavingsAccount from "./SavingsAccount"

const savingsTeo = new SavingsAccount("Teo", 5000);
savingsTeo.deposit(500);
console.log(`${savingsTeo.getAcountName()}'s account balance: ${savingsTeo.getBalance()}`);

const checkingTi = new CheckingAccount("Ti", 5000);
checkingTi.withdraw(450);
console.log(`${checkingTi.getAcountName()}'s account balance: ${checkingTi.getBalance()}`);
