"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckBox = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Check Box
 */
class CheckBox extends Component_js_1.Component {
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
     * Constructor
     * @param {ComponentType} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element, label = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-check" />').appendTo(telement);
        this._input = jQuery(`<input type="checkbox" class="form-check-input">`).appendTo(this._element);
        this._label = jQuery(`<label class="form-check-label">`).appendTo(this._element);
        this.setLabel(label);
    }
    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    setLabel(label) {
        const tlabel = this._getAnyElement(label);
        this._label.empty().append(tlabel);
    }
    /**
     * setReadOnly
     * @param {boolean} readonly
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
     * @return {boolean}
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
    /**
     * Set the onclick function for checkbox
     * @param {CheckBoxClickFn} fn
     */
    setOnClickFn(fn) {
        this._input.unbind().on('click', () => {
            fn();
        });
    }
}
exports.CheckBox = CheckBox;
