"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}());
exports.default = Employee;
