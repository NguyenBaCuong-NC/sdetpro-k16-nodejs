"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contractor_1 = require("./Contractor");
var FTE_1 = require("./FTE");
var EmployeeController_1 = require("./EmployeeController");
var teo = new FTE_1.default();
var ti = new Contractor_1.default();
var totalSalary = EmployeeController_1.default.getTotalSalary([teo, ti]);
console.log("Total Salary: ".concat(totalSalary));
