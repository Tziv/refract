export {Collision};
import * as wrapper from "sin-wrapper.js";

const _wrapper = Symbol('wrapper');

class Collision {
    constructor() {
        this[_wrapper] = new wrapper.SinWrapper();
    }
}