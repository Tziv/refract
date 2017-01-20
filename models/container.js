export {Container};

const _originPoint = Symbol('originPoint');
const _width = Symbol('width');
const _height = Symbol('height');
const _fluid = Symbol('fluid');

class Container {
    constructor(originPoint, width, height, fluid) {
        this[_originPoint] = originPoint;
        this[_width] = width;
        this[_height] = height;
        this[_fluid] = fluid;
    }
}