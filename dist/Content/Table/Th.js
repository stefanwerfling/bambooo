define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Th
     */
    class Th extends Element_1.Element {
        /**
         * constructor
         * @param atr
         * @param avalue
         */
        constructor(atr, avalue, width) {
            super();
            this._element = jQuery('<th/>').appendTo(atr.getElement());
            if (width) {
                this._element.css({
                    width
                });
            }
            if (avalue) {
                this.addValue(avalue);
            }
        }
        /**
         * addValue
         * @param avalue
         */
        addValue(avalue) {
            this._element.append(avalue);
        }
    }
    exports.Th = Th;
});
//# sourceMappingURL=Th.js.map