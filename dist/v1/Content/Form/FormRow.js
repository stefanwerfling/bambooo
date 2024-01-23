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
     * @param {any} element
     * @param {string} style
     */
    constructor(element, style = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="row ${style}" />`).appendTo(telement);
    }
    /**
     * createCol
     * @param {number} size
     * @param {[string]} addClass
     */
    createCol(size, addClass) {
        let tclass = `col-sm-${size}`;
        if (tclass) {
            tclass = `${tclass} ${addClass}`;
        }
        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }
}
exports.FormRow = FormRow;
