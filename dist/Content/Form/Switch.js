"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const Element_1 = require("../../Element");
class Switch extends Element_1.Element {
    constructor(element, id, label = '') {
        super();
        this._element = jQuery('<div class="form-group" />').appendTo(element);
        const control = jQuery('<div class="custom-control custom-switch" />').appendTo(this._element);
        this._input = jQuery(`<input type="checkbox" class="custom-control-input"  id="${id}" />`).appendTo(control);
        this._label = jQuery(`<label class="custom-control-label" for="${id}" />`).appendTo(control);
        this.setLabel(label);
    }
    setLabel(label) {
        this._label.empty().append(label);
    }
    setEnable(enable) {
        this._input.prop('checked', enable);
    }
    isEnable() {
        return this._input.is(':checked');
    }
    setChangeFn(onChangeFn) {
        this._input.unbind().on('change', () => {
            onChangeFn(this.isEnable());
        });
    }
}
exports.Switch = Switch;
