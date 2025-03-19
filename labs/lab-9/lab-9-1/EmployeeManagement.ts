import Employee from "./Employee";
import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";

const fteEmployee = new FTE();
const contractorEmployee = new Contractor();
const totalSalary = EmployeeController.getTotalSalary([fteEmployee, contractorEmployee]);
console.log(`Total Salary: ${totalSalary}`);
