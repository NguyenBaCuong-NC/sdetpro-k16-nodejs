import Employee from './Employee';

export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (const employee of employeeList) {
            totalSalary = totalSalary + employee.getSalary();
        }
        return totalSalary;
    }
}