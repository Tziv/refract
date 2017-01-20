export {fluid}

const _color = Symbol('color');
const _refractIndex = Symbol('refractIndex');

class fluid {
    constructor(color, refractIndex) {
        this[_color] = color;
        this[_refractIndex] = refractIndex;
    }

    get refractIndex() {
        return this[_refractIndex];
    }
}