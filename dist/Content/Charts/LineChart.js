define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * LineChart
     */
    class LineChart extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            this._height = '250';
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
});
//# sourceMappingURL=LineChart.js.map