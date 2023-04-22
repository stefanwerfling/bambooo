"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
const Element_1 = require("../../Element");
/**
 * LineChart
 */
class LineChart extends Element_1.Element {
    _height = '250';
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        this._element = jQuery('<canvas style="max-width: 100%;" />').appendTo(element);
        this._changeCanvasSize();
    }
    /**
     * _changeCanvasSize
     * @protected
     */
    _changeCanvasSize() {
        this._element.css({
            'min-height': `${this._height}px`,
            'height': `${this._height}px`,
            'max-height': `${this._height}px`
        });
    }
    /**
     * _getContext
     * @protected
     */
    _getContext() {
        return this._element.get(0).getContext('2d');
    }
}
exports.LineChart = LineChart;
