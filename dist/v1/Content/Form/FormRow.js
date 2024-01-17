"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = void 0;
const Element_1 = require("../../Element");
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
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="row ${style}" />`).appendTo(telement);
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
