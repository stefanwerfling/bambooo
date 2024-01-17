"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkLine = void 0;
const Element_1 = require("../../Element");
/**
 * SparkLine
 */
class SparkLine extends Element_1.Element {
    _height = '70';
    _width = '240';
    _data = [];
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        this._element = jQuery('<div />').appendTo(element);
    }
    addData(value) {
        this._data.push(value);
    }
    /**
     * print
     */
    print() {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const spark = new Sparkline(this._element[0], {
            width: this._width,
            height: this._height,
            lineColor: '#92c1dc',
            endColor: '#92c1dc'
        });
        spark.draw(this._data);
    }
}
exports.SparkLine = SparkLine;
