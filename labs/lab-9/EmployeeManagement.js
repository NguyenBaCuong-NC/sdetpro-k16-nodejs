"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FTE_1 = require("./FTE");
var Contractor_1 = require("./Contractor");
var EmployeeController_1 = require("./EmployeeController");
var fteNumber = 3;
var contractorNumber = 2;
var fteEmployeeList = [];
var contractorEmployeeList = [];
for (var index = 0; index < fteNumber; index++) {
    fteEmployeeList.push(new FTE_1.default("".concat(index + 1)));
}
for (var index = 0; index < contractorNumber; index++) {
    contractorEmployeeList.push(new Contractor_1.default("".concat(index + 1)));
}
var employeeList = fteEmployeeList.concat(contractorEmployeeList);
var totalSalary = EmployeeController_1.default.getTotalSalary(employeeList);
console.log("Total Salary: ".concat(totalSalary));
var sortedEmployeesByName = EmployeeController_1.default.getSortedByNameThenSalary(employeeList, "DESC", "DESC");
var sortedEmployeesBySalary = EmployeeController_1.default.getSortedBySalaryThenName(employeeList, "DESC", "DESC");
console.log(sortedEmployeesByName);
console.log(sortedEmployeesBySalary);
