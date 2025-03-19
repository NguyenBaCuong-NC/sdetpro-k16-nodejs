"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FTE_1 = require("./FTE");
var Contractor_1 = require("./Contractor");
var EmployeeController_1 = require("./EmployeeController");
var fteEmployee = new FTE_1.default();
var contractorEmployee = new Contractor_1.default();
var totalSalary = EmployeeController_1.default.getTotalSalary([fteEmployee, contractorEmployee]);
console.log("Total Salary: ".concat(totalSalary));
