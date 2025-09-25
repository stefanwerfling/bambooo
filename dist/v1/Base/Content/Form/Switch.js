"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Switch = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * Switch
 */
class Switch extends Component_js_1.Component {
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
     * @param {ComponentType} element
     * @param {string} id
     * @param {JQuery|string} label
     */
    constructor(element, id, label = '') {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-group" />').appendTo(telement);
        const control = jQuery('<div class="custom-control custom-switch" />').appendTo(this._element);
        this._input = jQuery(`<input type="checkbox" class="custom-control-input"  id="${id}" />`).appendTo(control);
        this._label = jQuery(`<label class="custom-control-label" for="${id}" />`).appendTo(control);
        this.setLabel(label);
    }
    /**
     * setLabel
     * @param {JQuery|string} label
     */
    setLabel(label) {
        this._label.empty().append(label);
    }
    /**
     * setEnable
     * @param {boolean} enable
     */
    setEnable(enable) {
        this._input.prop('checked', enable);
        this._input.trigger('change');
    }
    /**
     * isEnable
     * @return {boolean}
     */
    isEnable() {
        return this._input.is(':checked');
    }
    /**
     * setChangeFn
     * @param {SwitchChangeFn} onChangeFn
     */
    setChangeFn(onChangeFn) {
        this._input.unbind().on('change', () => {
            onChangeFn(this.isEnable());
        });
    }
    /**
     * setInativ
     * @param {boolean} inactiv
     */
    setInativ(inactiv) {
        if (inactiv) {
            this._input.attr('disabled', 1);
        }
        else {
            this._input.removeAttr('disabled');
        }
    }
}
exports.Switch = Switch;
