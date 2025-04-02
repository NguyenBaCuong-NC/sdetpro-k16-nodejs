import Employee from "./Employee";
import FTE from "./FTE";
import Contructor from "./Contractor";

export default class EmployeeController {

    static getTotalSalary(employeeList: Employee[]): number {
        let totalSalary = 0;
        for (let employee of employeeList) {
            totalSalary += employee.getSalary();
        }
        return totalSalary;
    }

    static getSortedByNameThenSalary(employeeList: Employee[], ruleName: string, ruleSalary: string): Employee[] {
        this.avaliableRules(ruleName, ruleSalary);
        let copiedList = [...employeeList];

        if (ruleName === "ASC") {
            copiedList.sort((a, b) => a.getName().localeCompare(b.getName()));
        }
        else {
            copiedList.sort((a, b) => b.getName().localeCompare(a.getName()));
        }

        copiedList.sort((a, b) => {
            if (a.getName() === b.getName()) {
                if (ruleSalary === "ASC") {
                    return a.getSalary() - b.getSalary();
                } else {
                    return b.getSalary() - a.getSalary();
                }
            } else {
                return 0;
            }
        });

        return copiedList;
    }

    static getSortedBySalaryThenName(employeeList: Employee[], ruleName: string, ruleSalary: string): Employee[] {
        this.avaliableRules(ruleName, ruleSalary);
        let copiedList = [...employeeList];

        if (ruleSalary === "ASC") {
            copiedList.sort((a, b) => a.getSalary() - b.getSalary());
        }
        else {
            copiedList.sort((a, b) => b.getSalary() - a.getSalary());
        }

        copiedList.sort((a, b) => {
            if (a.getSalary() === b.getSalary()) {
                if (ruleName === "ASC") {
                    return a.getName().localeCompare(b.getName());
                } else {
                    return b.getName().localeCompare(a.getName());
                }
            } else {
                return 0;
            }
        });

        return copiedList;
    }

    private static avaliableRules(ruleName: string, ruleSalary: string) {
        if (ruleName !== "ASC" && ruleName !== "DESC") {
            throw new Error("Invalid rule name. Must be 'ASC' or 'DESC'");
        }
        if (ruleSalary !== "ASC" && ruleSalary !== "DESC") {
            throw new Error("Invalid rule salary. Must be 'ASC' or 'DESC'");
        }
    }

}

