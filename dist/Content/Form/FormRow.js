define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * FormRow
     */
    class FormRow extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param style
         */
        constructor(element, style = '') {
            super();
            this._element = jQuery(`<div class="row ${style}" />`).appendTo(element);
        }
        /**
         * createCol
         * @param size
         */
        createCol(size) {
            return jQuery(`<div class="col-sm-${size}">`).appendTo(this._element);
        }
    }
    exports.FormRow = FormRow;
});
//# sourceMappingURL=FormRow.js.map