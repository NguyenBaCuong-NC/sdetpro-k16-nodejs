export default abstract class Employee {

    protected salary: number;
    protected totalEmployee: number;

    constructor(salary: number) {
        this.salary = salary;
    }

    public getSalary(): number {
        return this.salary;
    }

    protected abstract setTotalEmployee(): void;

    public getTotalEmployee(): number {
        return this.totalEmployee;
    }

}