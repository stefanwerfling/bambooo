define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * SparkLine
     */
    class SparkLine extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            this._height = '70';
            this._width = '240';
            this._data = [];
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
});
//# sourceMappingURL=SparkLine.js.map