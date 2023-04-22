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
     * @param element
     * @param label
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
     * @param label
     */
    setLabel(label) {
        this._label.empty().append(label);
    }
    /**
     * getLabelElement
     */
    getLabelElement() {
        return this._label;
    }
}
exports.FormGroup = FormGroup;
