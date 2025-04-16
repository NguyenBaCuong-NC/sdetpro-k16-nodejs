import Movable from "./Movable";
import Talkable from "./TalkAble";

export default class Animal implements Movable, Talkable {

    move(): void {
        console.log("Animal moving ...");
    }

    talk(): void {
        console.log(("Animal talking ..."));
    }

}