import Contractor from "./Contractor";
import FTE from "./FTE";
import EmployeeController from "./EmployeeController";

const teo = new FTE();
const ti = new Contractor();
const totalSalary = EmployeeController.getTotalSalary([teo, ti]);
console.log(`Total Salary: ${totalSalary}`);

