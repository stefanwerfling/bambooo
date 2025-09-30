"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * RadioInput
 */
class RadioInput extends Component_js_1.Component {
    /**
     * input radio
     * @protected
     */
    _inputRadio;
    /**
     * input
     * @protected
     */
    _input;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string} nameInput
     * @param {string} inputValue
     * @param {string} checked
     */
    constructor(element, radionName, radioValue, nameInput, inputValue, checked = false) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="input-group" />').appendTo(telement);
        const prependGroup = jQuery('<div class="input-group-prepend" />').appendTo(this._element);
        const spanInputGroup = jQuery('<span class="input-group-text" />').appendTo(prependGroup);
        this._inputRadio = jQuery(`<input type="radio" name="${radionName}" value="${radioValue}" ${checked}>`).appendTo(spanInputGroup);
        this._input = jQuery(`<input type="text" class="form-control" name="${nameInput}" value="${inputValue}">`).appendTo(prependGroup);
    }
    /**
     * Set input Value
     * @param {string} value
     */
    setInputValue(value) {
        this._input.val(value);
    }
    /**
     * Return the input value
     * @returns {string}
     */
    getInputValue() {
        return this._input.val();
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
    /**
     * Set Input ReadOnly
     * @param {boolean} readonly
     */
    setInputReadOnly(readonly) {
        if (readonly) {
            this._input.attr('disabled', 'disabled');
        }
        else {
            this._input.removeAttr('disabled');
        }
    }
    /**
     * Is Input readonly
     * @returns {boolean}
     */
    isInputReadOnly() {
        return this._input.is('[disabled=disabled]');
    }
    /**
     * Set the onclick function for radio input
     * @param {RadioInputClickFn} fn
     */
    setOnClickFnRadio(fn) {
        this._inputRadio.off('click').on('click', () => {
            fn();
        });
    }
}
exports.RadioInput = RadioInput;
