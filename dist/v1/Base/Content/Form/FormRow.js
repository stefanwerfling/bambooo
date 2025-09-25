"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormRow = exports.FormRowColType = void 0;
const Component_js_1 = require("../../Component.js");
var FormRowColType;
(function (FormRowColType) {
    FormRowColType[FormRowColType["none"] = 0] = "none";
    FormRowColType[FormRowColType["sm"] = 1] = "sm";
    FormRowColType[FormRowColType["lg"] = 2] = "lg";
    FormRowColType[FormRowColType["auto"] = 3] = "auto";
})(FormRowColType || (exports.FormRowColType = FormRowColType = {}));
/**
 * FormRow
 */
class FormRow extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} style
     */
    constructor(element, style = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="row ${style}" />`).appendTo(telement);
    }
    /**
     * create a col element
     * @param {number} size
     * @param {FormRowColType} colType
     * @param {[string]} addClass
     * @returns {JQuery}
     */
    createCol(size, colType = FormRowColType.sm, addClass) {
        let tclass = `col`;
        let tsize = size;
        switch (colType) {
            case FormRowColType.none:
                break;
            case FormRowColType.sm:
                tclass = `${tclass}-sm`;
                break;
            case FormRowColType.lg:
                tclass = `${tclass}-lg`;
                break;
            case FormRowColType.auto:
                tclass = `${tclass}-auto`;
                tsize = 0;
                break;
        }
        if (tsize > 0) {
            tclass = `${tclass}-${size}`;
        }
        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }
        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }
    /**
     * Create auto col element
     * @param {string} addClass
     * @returns {JQuery}
     */
    createAutoCol(addClass) {
        return this.createCol(0, FormRowColType.auto, addClass);
    }
}
exports.FormRow = FormRow;
