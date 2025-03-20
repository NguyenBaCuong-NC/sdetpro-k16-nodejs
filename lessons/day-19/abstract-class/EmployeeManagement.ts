import Contractor from "./Contractor";
import FTE from "./FTE";
import EmployeeController from "./EmployeeController";

const teo = new FTE();
teo.setBonus();
const ti = new Contractor();
ti.setBonus();
const totalSalary = EmployeeController.getTotalSalary([teo, ti]);
console.log(`Total Salary: ${totalSalary}`);

