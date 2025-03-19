"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    Employee.prototype.getTotalEmployee = function () {
        return this.totalEmployee;
    };
    return Employee;
}());
exports.default = Employee;
