import AndroidDriver from "./AndroidDriver";
import AppiumDriver from "./AppiumDriver";
import IOSDriver from "./IOSDriver";


export default class DriverManager {

    static getAppiumDriver(platform: string): AppiumDriver {
        switch (platform) {
            case "ios":
                return new IOSDriver();
            case "android":
                return new AndroidDriver();
            default:
                throw new Error("Invalid platform");
        }
    }

}