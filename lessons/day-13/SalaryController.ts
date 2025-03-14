import { Employee } from './Employee';

export class SalaryController {

    getTottalSalary(employees: Employee[]): number {
        let totalSalary: number = 0;
        for (let employee of employees) {
            totalSalary += employee.salary;
        }
        return totalSalary;
    }
}