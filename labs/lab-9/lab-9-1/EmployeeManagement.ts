import Employee from "./Employee";
import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";

const fteEmployee = new FTE();
fteEmployee.setTotalEmployee();
const contractorEmployee = new Contractor();
contractorEmployee.setTotalEmployee();
const totalSalary = EmployeeController.getTotalSalary([fteEmployee, contractorEmployee]);

console.log(`Total Salary: ${totalSalary}`);
