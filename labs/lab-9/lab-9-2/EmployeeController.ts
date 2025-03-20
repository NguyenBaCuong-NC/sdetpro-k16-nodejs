import Employee from "./Employee";
import Ti from "./Ti";
import Teo from "./Teo";
import Tun from "./Tun";

export default class EmployeeController {

    static getSortedEmployee(employee: Employee[]): Employee[] {
        let sortedEmployee = this.getSortName(employee);
        sortedEmployee.sort((a, b) => a.getSalary() - b.getSalary());
        return sortedEmployee;
    }

    private static getSortName(employee: Employee[]): Employee[] {
        let unsortedPosition = employee.length - 1;
        while (unsortedPosition > 0) {
            for (let index = 0; index < unsortedPosition; index++) {
                const leftValue = employee[index].getName();
                const rightValue = employee[index + 1].getName();
                if (leftValue > rightValue) {
                    let temp = employee[index];
                    employee[index] = employee[index + 1];
                    employee[index + 1] = temp;
                }
            }
            unsortedPosition--;
        }
        return employee;
    }

}

