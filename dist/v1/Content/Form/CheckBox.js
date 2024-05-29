"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const Element_1 = require("../../Element");
class CheckBox extends Element_1.Element {
    /**
     * input
     * @protected
     */
    _input;
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
    constructor(element, label = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-check" />').appendTo(this._element);
        this._input = jQuery(`<input type="checkbox" class="form-check-input">`).appendTo(this._element);
        this._label = jQuery(`<label class="form-check-label">`).appendTo(this._element);
        this.setLabel(label);
    }
    /**
     * setLabel
     * @param label
     */
    setLabel(label) {
        this._label.empty().append(label);
    }
    /**
     * setReadOnly
     * @param readonly
     */
    setReadOnly(readonly) {
        if (readonly) {
            this._input.attr('disabled', 'disabled');
        }
        else {
            this._input.removeAttr('disabled');
        }
    }
    /**
     * isReadOnly
     */
    isReadOnly() {
        return this._input.is('[disabled=disabled]');
    }
    /**
     * is box checked
     * @returns {boolean}
     */
    isChecked() {
        return this._input.is(':checked');
    }
    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    setChecked(checked) {
        if (checked) {
            this._input.attr('checked', 'checked');
        }
        else {
            this._input.removeAttr('checked');
        }
    }
}
exports.CheckBox = CheckBox;
