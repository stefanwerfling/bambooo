"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RadioInput = void 0;
const Element_1 = require("../../Element");
/**
 * RadioInput
 */
class RadioInput extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param radionName
     * @param radioValue
     * @param nameInput
     * @param nameInputValue
     * @param checked
     */
    constructor(element, radionName, radioValue, nameInput, inputValue, checked = false) {
        super();
        this._element = jQuery('<div class="input-group" />').appendTo(element);
        const prependGroup = jQuery('<div class="input-group-prepend" />').appendTo(this._element);
        const spanInputGroup = jQuery('<span class="input-group-text" />').appendTo(prependGroup);
        this._inputRadio = jQuery(`<input type="radio" name="${radionName}" value="${radioValue}" ${checked}>`).appendTo(spanInputGroup);
        this._input = jQuery(`<input type="text" class="form-control" name="${nameInput}" value="${inputValue}">`).appendTo(prependGroup);
    }
}
exports.RadioInput = RadioInput;
