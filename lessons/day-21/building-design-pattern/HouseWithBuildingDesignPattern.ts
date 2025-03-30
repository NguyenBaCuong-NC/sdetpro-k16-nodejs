export default class HouseWithBuildingDesignPattern {

    private topRoofColor: string;
    private windowNumber: number;
    private color: string;
    private mainDoorNumber: number;

    private constructor() {

    }

    //Getters //Read only
    getTopRoofColor(): string {
        return this.topRoofColor;
    }

    getWindowNumber(): number {
        return this.windowNumber;
    }

    getColor(): string {
        return this.color;
    }

    getMainDoorNumber(): number {
        return this.mainDoorNumber;
    }

    // Sale Department - Inner class //Write only
    public static Builder = class {

        private house: HouseWithBuildingDesignPattern;

        constructor() {
            // Khởi tạo đối tượng house trong constructor của Builder
            this.house = new HouseWithBuildingDesignPattern();
        }

        public setTopRoofColor(topRoofColor: string): this {
            this.house.topRoofColor = topRoofColor;
            //Method chaining
            return this;
        }

        public setWindowNumber(windowNumber: number): this {
            this.house.windowNumber = windowNumber;
            return this;
        }

        public setColor(color: string): this {
            this.house.color = color;
            return this;
        }

        public setMainDoorNumber(mainDoorNumber: number): this {
            this.house.mainDoorNumber = mainDoorNumber;
            return this;
        }

        //Sign the contract method
        public build(): HouseWithBuildingDesignPattern {
            return this.house;
        }

    }

}