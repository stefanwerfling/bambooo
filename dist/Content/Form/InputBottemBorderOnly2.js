"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBottemBorderOnly2 = exports.InputType = void 0;
const Element_1 = require("../../Element");
const FormGroupButton_1 = require("./FormGroupButton");
/**
 * InputType
 */
var InputType;
(function (InputType) {
    InputType["text"] = "text";
    InputType["number"] = "number";
    InputType["range"] = "range";
    InputType["password"] = "password";
    InputType["colorpicker"] = "colorpicker";
})(InputType = exports.InputType || (exports.InputType = {}));
/**
 * InputBottemBorderOnly2
 */
class InputBottemBorderOnly2 extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    constructor(element, id, type = InputType.text) {
        super();
        const telement = this._getAnyElement(element);
        let aid = '';
        if (id !== undefined && id !== null) {
            aid = `id="${id}"`;
        }
        let ttype = `${type}`;
        switch (type) {
            case InputType.colorpicker:
                ttype = `${InputType.text}`;
                break;
        }
        this._element = jQuery(`<input type="${ttype}" class="form-control form-control-border border-width-2" ${aid} placeholder="">`);
        if (element instanceof FormGroupButton_1.FormGroupButton) {
            this._element.prependTo(telement);
        }
        else {
            this._element.appendTo(telement);
        }
        switch (type) {
            case InputType.colorpicker:
                this._element.colorpicker();
                break;
        }
    }
    /**
     * setPlaceholder
     * @param placeholder
     */
    setPlaceholder(placeholder) {
        this._element.attr("placeholder", placeholder);
    }
    /**
     * setValue
     * @param value
     */
    setValue(value) {
        this._element.val(value);
    }
    /**
     * getValue
     */
    getValue() {
        return this._element.val();
    }
    /**
     * setReadOnly
     * @param readonly
     */
    setReadOnly(readonly) {
        if (readonly) {
            this._element.attr('disabled', 'disabled');
        }
        else {
            this._element.removeAttr('disabled');
        }
    }
    /**
     * isReadOnly
     */
    isReadOnly() {
        return this._element.is('[disabled=disabled]');
    }
}
exports.InputBottemBorderOnly2 = InputBottemBorderOnly2;
