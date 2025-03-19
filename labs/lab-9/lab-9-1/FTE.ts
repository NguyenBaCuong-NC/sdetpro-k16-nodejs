import Employee from "./Employee";

export default class FTE extends Employee {

    constructor() {
        super(50 * 1000);
    }

    setTotalEmployee(): void {
        this.totalEmployee = 3;
    }

}