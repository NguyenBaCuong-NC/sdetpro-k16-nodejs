import Employee from "./Employee";
import Ti from "./Ti";
import Teo from "./Teo";
import Tun from "./Tun";
import EmployeeController from "./EmployeeController";

const teo = new Teo();
const tun = new Tun();
const ti = new Ti();
const sortedEmployee = EmployeeController.getSortedEmployee([teo, ti, tun]);

console.log(sortedEmployee);
