import Employee from "./Employee";
import FTE from "./FTE";
import Contructor from "./Contractor";

export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (let employee of employeeList) {
            employee.setTotalEmployee();
            totalSalary = employee.getSalary() * employee.getTotalEmployee();
        }
        return totalSalary;
    }
}
