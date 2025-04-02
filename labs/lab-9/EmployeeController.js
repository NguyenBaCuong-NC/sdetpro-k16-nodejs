"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getTotalSalary = function (employeeList) {
        var totalSalary = 0;
        for (var _i = 0, employeeList_1 = employeeList; _i < employeeList_1.length; _i++) {
            var employee = employeeList_1[_i];
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    };
    EmployeeController.getSortedByNameThenSalary = function (employeeList, ruleName, ruleSalary) {
        this.avaliableRules(ruleName, ruleSalary);
        var copiedList = __spreadArray([], employeeList, true);
        if (ruleName === "ASC") {
            copiedList.sort(function (a, b) { return a.getName().localeCompare(b.getName()); });
        }
        else {
            copiedList.sort(function (a, b) { return b.getName().localeCompare(a.getName()); });
        }
        copiedList.sort(function (a, b) {
            if (a.getName() === b.getName()) {
                if (ruleSalary === "ASC") {
                    return a.getSalary() - b.getSalary();
                }
                else {
                    return b.getSalary() - a.getSalary();
                }
            }
            else {
                return 0;
            }
        });
        return copiedList;
    };
    EmployeeController.getSortedBySalaryThenName = function (employeeList, ruleName, ruleSalary) {
        this.avaliableRules(ruleName, ruleSalary);
        var copiedList = __spreadArray([], employeeList, true);
        if (ruleSalary === "ASC") {
            copiedList.sort(function (a, b) { return a.getSalary() - b.getSalary(); });
        }
        else {
            copiedList.sort(function (a, b) { return b.getSalary() - a.getSalary(); });
        }
        copiedList.sort(function (a, b) {
            if (a.getSalary() === b.getSalary()) {
                if (ruleName === "ASC") {
                    return a.getName().localeCompare(b.getName());
                }
                else {
                    return b.getName().localeCompare(a.getName());
                }
            }
            else {
                return 0;
            }
        });
        return copiedList;
    };
    EmployeeController.avaliableRules = function (ruleName, ruleSalary) {
        if (ruleName !== "ASC" && ruleName !== "DESC") {
            throw new Error("Invalid rule name. Must be 'ASC' or 'DESC'");
        }
        if (ruleSalary !== "ASC" && ruleSalary !== "DESC") {
            throw new Error("Invalid rule salary. Must be 'ASC' or 'DESC'");
        }
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
