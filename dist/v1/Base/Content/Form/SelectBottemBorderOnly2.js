"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBottemBorderOnly2 = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * SelectBottemBorderOnly2
 */
class SelectBottemBorderOnly2 extends Component_js_1.Component {
    /**
     * selected value
     * @protected
     */
    _selectedValue = '';
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<select class="custom-select form-control-border border-width-2" />').appendTo(telement);
        // set empty function
        this.setChangeFn(() => { });
    }
    /**
     * setValues
     * @param {SelectOption[]} options
     */
    setValues(options) {
        for (const aoption of options) {
            this.addValue(aoption);
        }
    }
    /**
     * addValue
     * @param {SelectOption} option
     */
    addValue(option) {
        let style = '';
        if (option.style) {
            style = `style="${option.style}"`;
        }
        jQuery(`<option ${style} value="${option.key}">${option.value}</option>`).appendTo(this._element);
    }
    /**
     * Return true when an option has the key
     * @param {string} key
     * @returns {boolean}
     */
    hasValue(key) {
        let result = false;
        this._element.find('option').each((_index, element) => {
            if (jQuery(element).val() === key) {
                result = true;
            }
        });
        return result;
    }
    /**
     * clearValues
     */
    clearValues() {
        this._element.empty();
    }
    /**
     * setChangeFn
     * @param {SelectChangeFn} onChangeFn
     */
    setChangeFn(onChangeFn) {
        this._element.unbind().on('change', () => {
            this._selectedValue = this._element.val();
            onChangeFn(this._selectedValue);
        });
    }
    /**
     * setSelectedValue
     * @param {string} value
     */
    setSelectedValue(value) {
        this._selectedValue = value;
        this._element.val(value).prop('selected', true).change();
    }
    /**
     * getSelectedValue
     * @returns {string}
     */
    getSelectedValue() {
        return this._selectedValue;
    }
}
exports.SelectBottemBorderOnly2 = SelectBottemBorderOnly2;
