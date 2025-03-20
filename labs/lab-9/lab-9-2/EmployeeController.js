"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmployeeController = /** @class */ (function () {
    function EmployeeController() {
    }
    EmployeeController.getSortedEmployee = function (employee) {
        var sortedEmployee = this.getSortName(employee);
        sortedEmployee.sort(function (a, b) { return a.getSalary() - b.getSalary(); });
        return sortedEmployee;
    };
    EmployeeController.getSortName = function (employee) {
        var unsortedPosition = employee.length - 1;
        while (unsortedPosition > 0) {
            for (var index = 0; index < unsortedPosition; index++) {
                var leftValue = employee[index].getName();
                var rightValue = employee[index + 1].getName();
                if (leftValue > rightValue) {
                    var temp = employee[index];
                    employee[index] = employee[index + 1];
                    employee[index + 1] = temp;
                }
            }
            unsortedPosition--;
        }
        return employee;
    };
    return EmployeeController;
}());
exports.default = EmployeeController;
