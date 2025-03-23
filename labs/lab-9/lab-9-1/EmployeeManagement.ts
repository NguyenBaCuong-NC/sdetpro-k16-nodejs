import Employee from "./Employee";
import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";

const a = new FTE("A");
const b = new FTE("B");
const c = new FTE("C");
const d = new Contractor("D");
const e = new Contractor("E");
const totalSalary = EmployeeController.getTotalSalary([a, b, c, d, e]);

console.log(`Total Salary: ${totalSalary}`);
