import Employee from "./Employee";

export default class Contractor extends Employee {

    constructor() {
        super(10000);
    }
    
    setBonus(): void {
        this.bonus = 0;
    }

}