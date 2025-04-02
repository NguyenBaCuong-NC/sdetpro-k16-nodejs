import Employee from "./Employee";
import FTE from "./FTE";
import Contractor from "./Contractor";
import EmployeeController from "./EmployeeController";

const fteNumber = 3;
const contractorNumber = 2;
const fteEmployeeList: Employee[] = [];
const contractorEmployeeList: Employee[] = [];

for (let index = 0; index < fteNumber; index++) {
    fteEmployeeList.push(new FTE(`${index + 1}`));
}

for (let index = 0; index < contractorNumber; index++) {
    contractorEmployeeList.push(new Contractor(`${index + 1}`));
}

const employeeList = fteEmployeeList.concat(contractorEmployeeList);

const totalSalary = EmployeeController.getTotalSalary(employeeList);
console.log(`Total Salary: ${totalSalary}`);

const sortedEmployeesByName = EmployeeController.getSortedByNameThenSalary(employeeList, 'ASC', 'ASC');
const sortedEmployeesBySalary = EmployeeController.getSortedBySalaryThenName(employeeList, 'ASC', 'ASC');

console.log(sortedEmployeesByName);
console.log(sortedEmployeesBySalary);


