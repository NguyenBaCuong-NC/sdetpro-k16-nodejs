export default class Employee {

    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    setSalary(salary: number) {
        this.salary = salary;
    }

    getSalary(): number {
        return this.salary;
    }

}