"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee_1 = require("./Employee");
var SalaryController_1 = require("./SalaryController");
var teo = new Employee_1.Employee('teo', 1000);
var ti = new Employee_1.Employee('ti', 2000);
var salaryController = new SalaryController_1.SalaryController();
var totalSalary = salaryController.getTottalSalary([teo, ti]);
console.log(totalSalary);
