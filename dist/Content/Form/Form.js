"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = void 0;
const Element_1 = require("../../Element");
/**
 * Form
 */
class Form extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<form></form>').appendTo(telement);
    }
}
exports.Form = Form;
