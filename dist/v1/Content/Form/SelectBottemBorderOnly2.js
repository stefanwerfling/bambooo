"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBottemBorderOnly2 = void 0;
const Element_1 = require("../../Element");
/**
 * SelectBottemBorderOnly2
 */
class SelectBottemBorderOnly2 extends Element_1.Element {
    /**
     * selected value
     * @protected
     */
    _selectedValue = '';
    /**
     * constructor
     * @param element
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
     * @param options
     */
    setValues(options) {
        for (const aoption of options) {
            this.addValue(aoption);
        }
    }
    /**
     * addValue
     * @param option
     */
    addValue(option) {
        let style = '';
        if (option.style) {
            style = `style="${option.style}"`;
        }
        jQuery(`<option ${style} value="${option.key}">${option.value}</option>`).appendTo(this._element);
    }
    /**
     * clearValues
     */
    clearValues() {
        this._element.empty();
    }
    /**
     * setChangeFn
     * @param onChangeFn
     */
    setChangeFn(onChangeFn) {
        this._element.unbind().on('change', () => {
            this._selectedValue = this._element.val();
            onChangeFn(this._selectedValue);
        });
    }
    /**
     * setSelectedValue
     * @param value
     */
    setSelectedValue(value) {
        this._selectedValue = value;
        this._element.val(value).prop('selected', true).change();
    }
    /**
     * getSelectedValue
     */
    getSelectedValue() {
        return this._selectedValue;
    }
}
exports.SelectBottemBorderOnly2 = SelectBottemBorderOnly2;
