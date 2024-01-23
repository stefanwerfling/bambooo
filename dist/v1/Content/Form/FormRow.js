"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = exports.FormRowColType = void 0;
const Element_1 = require("../../Element");
var FormRowColType;
(function (FormRowColType) {
    FormRowColType[FormRowColType["none"] = 0] = "none";
    FormRowColType[FormRowColType["sm"] = 1] = "sm";
})(FormRowColType = exports.FormRowColType || (exports.FormRowColType = {}));
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
    createCol(size, colType = FormRowColType.sm, addClass) {
        let tclass = `col`;
        switch (colType) {
            case FormRowColType.none:
                break;
            case FormRowColType.sm:
                tclass = `${tclass}-sm`;
                break;
        }
        tclass = `${tclass}-${size}`;
        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }
        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }
}
exports.FormRow = FormRow;
