"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChart = void 0;
const Element_1 = require("../../Element");
/**
 * PieChart
 */
class PieChart extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        this._height = '350';
        this._width = '350';
        this._element = jQuery('<canvas />').appendTo(element);
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
            'max-height': `${this._height}px`,
            'min-width': `${this._width}px`,
            'width': `${this._width}px`,
            'max-width': `${this._width}px`
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
exports.PieChart = PieChart;
