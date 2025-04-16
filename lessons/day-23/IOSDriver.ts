import AppiumDriver from "./AppiumDriver";

export default class IOSDriver extends AppiumDriver {

    lanchApp(): void {
        console.log("Launching IOS session");
    }

    closeApp(): void {
        console.log("Closing IOS session");
    }

}