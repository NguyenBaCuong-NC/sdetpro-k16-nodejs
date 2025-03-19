import Employee from "./Employee";

export default class Contractor extends Employee {

    constructor() {
        super(40 * 1000);
    }

    setTotalEmployee(): void {
        this.totalEmployee = 2;
    }

}