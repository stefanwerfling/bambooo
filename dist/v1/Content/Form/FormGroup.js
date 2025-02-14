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
    _label = null;
    /**
     * constructor
     * @param {JQuery<HTMLElement>} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element, label) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-group" />').appendTo(telement);
        if (label) {
            this.setLabel(label);
        }
    }
    /**
     * Create the label object element
     * @protected
     */
    _getLabel() {
        if (this._label === null) {
            this._label = jQuery('<label/>').appendTo(this._element);
        }
        return this._label;
    }
    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    setLabel(label) {
        const tlabel = this._getAnyElement(label);
        this._getLabel().empty().append(tlabel);
    }
    /**
     * getLabelElement
     * @returns {JQuery<HTMLElement>}
     */
    getLabelElement() {
        return this._getLabel();
    }
    /**
     * Clear the elements from group
     */
    clear() {
        if (this._label !== null) {
            this._label.detach();
        }
        this._element.empty();
        if (this._label !== null) {
            this._label.appendTo(this._element);
        }
    }
}
exports.FormGroup = FormGroup;
