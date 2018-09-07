'use strict'

const GetValue = Phaser.Utils.Objects.GetValue;

class Quad {
    constructor(config) {
        this.resetFromJSON(config);
    }

    resetFromJSON(o) {
        this.setOriginPosition(GetValue(o, 'x', 0), GetValue(o, 'y', 0));
        this.setCellSize(GetValue(o, 'cellWidth', 33), GetValue(o, 'cellHeight', 42));
        this.setType(GetValue(o, 'type', 0));

    }

    setOriginPosition(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
        this._halfWidth = value / 2;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
        this._halfHeight = value / 2;
    }

    setCellSize(width, height) {
        this.width = width;
        this.height = height;
        return this;
    }

    get cellWidth() {
        return this.width;
    }

    set cellWidth(value) {
        this.width = value;
    }

    get cellHeight() {
        return this.height;
    }

    set cellHieght(value) {
        this.height = value;
    }

    setType(type) {
        if (typeof (type) === 'string') {
            type = ORIENTATIONTYPE[type]
        }
        this.mode = type; // orthogonal, isometric, or staggered
        return this;
    }
}

const ORIENTATIONTYPE = {
    'orthogonal': 0,
    'isometric': 1,
    'staggered': 2
};

export default Quad;