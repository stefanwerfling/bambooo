"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroup = void 0;
const Element_1 = require("../../Element");
/**
 * FormGroup
 */
class FormGroup extends Element_1.Element {
    /**
     * label
     * @protected
     */
    _label;
    /**
     * constructor
     * @param {JQuery<HTMLElement>} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element, label) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-group" />').appendTo(telement);
        this._label = jQuery('<label/>').appendTo(this._element);
        if (label) {
            this.setLabel(label);
        }
    }
    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    setLabel(label) {
        const tlabel = this._getAnyElement(label);
        this._label.empty().append(tlabel);
    }
    /**
     * getLabelElement
     * @returns {JQuery<HTMLElement>}
     */
    getLabelElement() {
        return this._label;
    }
}
exports.FormGroup = FormGroup;
