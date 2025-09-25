"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PieChart = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * PieChart
 */
class PieChart extends Component_js_1.Component {
    /**
     * Height
     * @protected
     */
    _height = 350;
    /**
     * Width
     * @protected
     */
    _width = 350;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super(jQuery('<canvas />').appendTo(Component_js_1.Component.getAnyElement(element)));
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
        const canvas = this._element.get(0);
        return canvas?.getContext('2d') ?? null;
    }
}
exports.PieChart = PieChart;
