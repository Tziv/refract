export {SinWrapper}

class SinWrapper {
    toRadian(degrees) {
        return degrees * Math.PI / 180;
    }

    toDegrees(rad) {
        return rad * 180 / Math.PI;
    }

    round(number) {
        return (Math.round(number * 100)) / 100;
    }

    sin(degrees) {
        return this.round(Math.sin(this.toRadian(degrees)));
    }

    arcSin(sinResult) {
        return this.round(this.toDegrees(Math.asin(sinResult)));
    }
}