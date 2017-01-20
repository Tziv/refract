export {fluid}

const _color = new Symbol('color');
const _refractIndex = new Symbol('refractIndex');

class fluid {
    constructor(color, refractIndex) {
        this[_color] = color;
        this[_refractIndex] = refractIndex;
    }
}