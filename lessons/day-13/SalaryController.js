"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalaryController = void 0;
var SalaryController = /** @class */ (function () {
    function SalaryController() {
    }
    SalaryController.prototype.getTottalSalary = function (employees) {
        var totalSalary = 0;
        for (var _i = 0, employees_1 = employees; _i < employees_1.length; _i++) {
            var employee = employees_1[_i];
            totalSalary += employee.salary;
        }
        return totalSalary;
    };
    return SalaryController;
}());
exports.SalaryController = SalaryController;
