import AppiumDriver from "./AppiumDriver";

export default class AndroidDriver extends AppiumDriver {

    lanchApp(): void {
        console.log("Launching Android session");
    }

    closeApp(): void {
        console.log("Closing Android session");
    }

}