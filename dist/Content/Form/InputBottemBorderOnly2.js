"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBottemBorderOnly2 = exports.InputType = void 0;
const Element_1 = require("../../Element");
const Icon_1 = require("../Icon/Icon");
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
    InputType["date"] = "date";
    InputType["datetime"] = "datetime";
    InputType["time"] = "time";
})(InputType = exports.InputType || (exports.InputType = {}));
/**
 * InputBottemBorderOnly2
 */
class InputBottemBorderOnly2 extends Element_1.Element {
    /**
     * type
     * @protected
     */
    _type = InputType.text;
    /**
     * input group
     * @protected
     */
    _inputGroup = null;
    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    constructor(element, id, type = InputType.text) {
        super();
        this._type = type;
        let telement = this._getAnyElement(element);
        let ttype = `${type}`;
        let useInputGroup = null;
        switch (type) {
            case InputType.colorpicker:
                ttype = `${InputType.text}`;
                break;
            case InputType.date:
            case InputType.time:
                ttype = `${InputType.text}`;
                useInputGroup = 'date';
                if (id === undefined) {
                    id = `input${this._uniqId()}`;
                }
                break;
        }
        let aid = '';
        if (id !== undefined && id !== null) {
            aid = `id="${id}"`;
        }
        if (useInputGroup) {
            this._inputGroup = jQuery(`<div class="input-group ${useInputGroup}" id="${id}" data-target-input="nearest"></div>`).appendTo(telement);
            telement = this._inputGroup;
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
                //this._element.colorpicker();
                break;
            case InputType.date:
            case InputType.time:
                const appendInputGroup = jQuery(`<div class="input-group-append" data-target="#${id}" data-toggle="datetimepicker"></div>`).appendTo(telement);
                const button = jQuery('<div class="input-group-text"></div>').appendTo(appendInputGroup);
                switch (type) {
                    case InputType.date:
                        new Icon_1.Icon(button, Icon_1.IconFa.calendar);
                        this._inputGroup.datetimepicker({
                            format: 'YYYY.MM.DD'
                        });
                        break;
                    case InputType.time:
                        new Icon_1.Icon(button, Icon_1.IconFa.clock);
                        this._inputGroup.datetimepicker({
                            format: 'LT'
                        });
                        break;
                }
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
        switch (this._type) {
            case InputType.date:
            case InputType.time:
                this._inputGroup.data("datetimepicker").date(value);
                break;
            default:
                this._element.val(value);
        }
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
