import Employee from "./Employee";
import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";

const a = new FTE("A");
const b = new Contractor("B");
const c = new FTE("C");
const e = new FTE("E");
const d = new Contractor("D");
const sortedEmployee = EmployeeController.getSortedEmployee([a, b, c, d, e]);

console.log(sortedEmployee);
