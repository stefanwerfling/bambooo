"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const Element_js_1 = require("../../Element.js");
/**
 * Radio
 */
class Radio extends Element_js_1.Element {
    /**
     * input radio
     * @protected
     */
    _inputRadio;
    /**
     * label
     * @protected
     */
    _label = null;
    /**
     * Constructor
     * @param {JQuery<HTMLElement>|any} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string|LangText|JQuery<HTMLElement>|null} label
     * @param {boolean} checked
     */
    constructor(element, radionName, radioValue, label = null, checked = false) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-check" />').appendTo(telement);
        this._inputRadio = jQuery(`<input class="form-check-input" type="radio" name="${radionName}" value="${radioValue}">`).appendTo(this._element);
        if (label !== null) {
            this.setLabel(label);
        }
        this.setChecked(checked);
    }
    /**
     * Create the label object element
     * @protected
     */
    _getLabel() {
        if (this._label === null) {
            this._label = jQuery('<label class="form-check-label"/>').appendTo(this._element);
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
     * is box checked
     * @returns {boolean}
     */
    isChecked() {
        return this._inputRadio.is(':checked');
    }
    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    setChecked(checked) {
        if (checked) {
            this._inputRadio.attr('checked', 'checked');
        }
        else {
            this._inputRadio.removeAttr('checked');
        }
    }
}
exports.Radio = Radio;
