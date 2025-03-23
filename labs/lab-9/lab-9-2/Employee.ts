export default abstract class Employee {

    protected name: string;
    protected salary: number;

    constructor(name: string) {
        this.name = name;
    }

    public getSalary(): number {
        return this.salary;
    }

    public getName(): number {
        return this.salary;
    }

}