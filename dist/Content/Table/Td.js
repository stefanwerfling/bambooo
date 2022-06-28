define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Td
     */
    class Td extends Element_1.Element {
        /**
         * constructor
         * @param atr
         * @param avalue
         * @param colspan
         */
        constructor(atr, avalue, colspan) {
            super();
            let params = '';
            if (colspan) {
                params = `${params} colspan="${colspan}"`;
            }
            this._element = jQuery(`<td ${params}/>`).appendTo(atr.getElement());
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
    exports.Td = Td;
});
//# sourceMappingURL=Td.js.map