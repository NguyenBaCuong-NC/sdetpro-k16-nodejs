import Animal from "./Animal";
import Human from "./Human";
import Movable from "./Movable";
import Talkable from "./TalkAble";

export default class RacingController {

    static move(movable: Movable) {
        movable.move();
    }

    static talk(talkable: Talkable) {
        talkable.talk();
    }

}

RacingController.move(new Animal());
RacingController.move(new Human());

RacingController.talk(new Animal());
RacingController.talk(new Human());
