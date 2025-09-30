"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparkLine = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * SparkLine
 */
class SparkLine extends Component_js_1.Component {
    /**
     * Height
     * @protected
     */
    _height = 70;
    /**
     * Width
     * @protected
     */
    _width = 240;
    /**
     * Data
     * @protected
     */
    _data = [];
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super(jQuery('<div />').appendTo(Component_js_1.Component.getAnyElement(element)));
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
