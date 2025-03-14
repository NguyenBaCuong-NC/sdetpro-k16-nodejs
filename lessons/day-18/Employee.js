"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(salary) {
        this.salary = salary;
    }
    Employee.prototype.setSalary = function (salary) {
        this.salary = salary;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.default = Employee;
