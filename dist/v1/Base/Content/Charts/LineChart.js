"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChart = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * LineChart
 */
class LineChart extends Component_js_1.Component {
    /**
     * Height
     * @protected
     */
    _height = 250;
    /**
     * constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super(jQuery('<canvas style="max-width: 100%;" />').appendTo(Component_js_1.Component.getAnyElement(element)));
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
        const canvas = this._element.get(0);
        return canvas?.getContext('2d') ?? null;
    }
}
exports.LineChart = LineChart;
