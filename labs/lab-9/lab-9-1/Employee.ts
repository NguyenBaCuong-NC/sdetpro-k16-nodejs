export default abstract class Employee {

    protected name: string;
    protected salary: number;

    constructor(name: string, salary: number) {
        this.name = name;
        this.salary = salary;
    }

    public getName(): string {
        return this.name;
    }

    public getSalary(): number {
        return this.salary;
    }

}