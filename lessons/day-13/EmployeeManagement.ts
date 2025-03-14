import { Employee } from './Employee';
import { SalaryController } from './SalaryController';

let teo = new Employee('teo', 1000);
let ti = new Employee('ti', 2000);
let salaryController = new SalaryController();

const totalSalary = salaryController.getTottalSalary([teo, ti]);
console.log(totalSalary);