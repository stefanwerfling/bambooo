"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroup = void 0;
const Element_1 = require("../../Element");
/**
 * FormGroup
 */
class FormGroup extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param label
     */
    constructor(element, label) {
        super();
        this._element = jQuery('<div class="form-group" />').appendTo(element);
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
}
exports.FormGroup = FormGroup;
