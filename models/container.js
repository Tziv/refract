export {Container};

const _originPoint = new Symbol('originPoint');
const _width = new Symbol('width');
const _height = new Symbol('height');
const _fluid = new Symbol('fluid');

class Container {
    constructor(originPoint, width, height, fluid) {
        this[_originPoint] = originPoint;
        this[_width] = width;
        this[_height] = height;
        this[_fluid] = fluid;
    }
}