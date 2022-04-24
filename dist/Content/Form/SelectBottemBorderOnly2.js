"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBottemBorderOnly2 = void 0;
const Element_1 = require("../../Element");
/**
 * SelectBottemBorderOnly2
 */
class SelectBottemBorderOnly2 extends Element_1.Element {
    constructor(element) {
        super();
        this._selectedValue = '';
        this._element = jQuery('<select class="custom-select form-control-border border-width-2" />').appendTo(element);
    }
    setValues(options) {
        for (const aoption of options) {
            this.addValue(aoption);
        }
    }
    addValue(option) {
        jQuery(`<option value="${option.key}">${option.value}</option>`).appendTo(this._element);
    }
    setChangeFn(onChangeFn) {
        this._element.unbind().on('change', () => {
            this._selectedValue = this._element.val();
            onChangeFn(this._selectedValue);
        });
    }
    setSelectedValue(value) {
        this._selectedValue = value;
        this._element.val(value).change();
    }
    getSelectedValue() {
        return this._selectedValue;
    }
}
exports.SelectBottemBorderOnly2 = SelectBottemBorderOnly2;
