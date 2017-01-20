export {Collision};
import * as wrapper from "sin-wrapper.js";

const _wrapper = Symbol('wrapper');

class Collision {
    constructor() {
        this[_wrapper] = new wrapper.SinWrapper();
    }

    getReturnAngle(enterAngle, formerMedium, newMedium) {
        //Snell's law: sin(enterAngle) * formerMedium = sin(exitAngle) * newMedium
        let formerMediumRefractIndex = formerMedium.refractIndex;
        let newMediumRefractIndex = newMedium.refractIndex;
        let sinEntryAngle = this[_wrapper].sin(enterAngle);
        let sinExitAngle = sinEntryAngle * formerMediumRefractIndex / newMediumRefractIndex;
        let returnAngle = this[_wrapper].arcSin(sinExitAngle);
        return returnAngle;
    }
}