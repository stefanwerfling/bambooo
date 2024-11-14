"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputBottemBorderOnly2 = exports.InputType = void 0;
const moment_1 = __importDefault(require("moment"));
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
    InputType["daterange"] = "daterange";
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
     * Options
     * @protected
     */
    _options;
    /**
     * input group
     * @protected
     */
    _inputGroup = null;
    /**
     * Constructor
     * @param {any} element
     * @param {string} id
     * @param {InputType} type
     * @param {InputTypeOptions} options
     */
    constructor(element, id, type = InputType.text, options = {}) {
        super();
        this._type = type;
        this._options = options;
        let tid = id;
        let telement = this._getAnyElement(element);
        let ttype = `${type}`;
        let useInputGroup = null;
        let iclasses = '';
        switch (type) {
            case InputType.colorpicker:
                ttype = `${InputType.text}`;
                break;
            case InputType.date:
            case InputType.time:
            case InputType.daterange:
                ttype = `${InputType.text}`;
                useInputGroup = 'date';
                iclasses = 'datetimepicker-input';
                if (tid === undefined) {
                    tid = `input${this._uniqId()}`;
                }
                break;
        }
        let aid = '';
        let dataTarget = '';
        if (tid !== undefined && tid !== null) {
            aid = `id="${tid}"`;
            dataTarget = `data-target=#${tid}`;
        }
        if (useInputGroup) {
            this._inputGroup = jQuery(`<div class="input-group ${useInputGroup}" id="${tid}g" data-target-input="nearest"></div>`).appendTo(telement);
            telement = this._inputGroup;
        }
        this._element = jQuery(`<input type="${ttype}" class="form-control form-control-border border-width-2 ${iclasses}" ${aid} ${dataTarget} placeholder="">`);
        if (element instanceof FormGroupButton_1.FormGroupButton) {
            this._element.prependTo(telement);
        }
        else {
            this._element.appendTo(telement);
        }
        switch (type) {
            // Color ---------------------------------------------------------------------------------------------------
            case InputType.colorpicker:
                this._element.colorpicker();
                break;
            // Datetimepicker ------------------------------------------------------------------------------------------
            case InputType.date:
            case InputType.time:
            case InputType.daterange:
                const appendInputGroup = jQuery(`<div class="input-group-append" data-target="#${id}" data-toggle="datetimepicker"></div>`).appendTo(telement);
                const button = jQuery('<div class="input-group-text"></div>').appendTo(appendInputGroup);
                let lang = 'de';
                if (this._options.lang) {
                    lang = this._options.lang;
                }
                switch (type) {
                    // Date --------------------------------------------------------------------------------------------
                    case InputType.date:
                        new Icon_1.Icon(button, Icon_1.IconFa.calendar);
                        let dformat = 'YYYY.MM.DD dddd';
                        if (this._options.date_format) {
                            dformat = this._options.date_format;
                        }
                        this._inputGroup.datetimepicker({
                            format: dformat,
                            lang: lang
                        });
                        break;
                    // Time --------------------------------------------------------------------------------------------
                    case InputType.time:
                        new Icon_1.Icon(button, Icon_1.IconFa.clock);
                        let tformat = 'hh:mm';
                        if (this._options.time_format) {
                            tformat = this._options.time_format;
                        }
                        this._inputGroup.datetimepicker({
                            format: tformat,
                            lang: lang
                        });
                        break;
                    // Date-Range --------------------------------------------------------------------------------------
                    case InputType.daterange:
                        new Icon_1.Icon(button, Icon_1.IconFa.calendar);
                        let drformat = 'YYYY.MM.DD dddd';
                        if (this._options.date_format) {
                            drformat = this._options.date_format;
                        }
                        let ranges = {};
                        if (this._options.ranges) {
                            ranges = this._options.ranges;
                        }
                        this._inputGroup.datetimepicker({
                            format: drformat,
                            ranges: ranges,
                            lang: lang,
                            startDate: (0, moment_1.default)().startOf('month'),
                            endDate: (0, moment_1.default)().endOf('month')
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
        this._element.attr('placeholder', placeholder);
    }
    /**
     * setValue
     * @param value
     */
    setValue(value) {
        switch (this._type) {
            case InputType.date:
            case InputType.time:
                if (value === '') {
                    this._inputGroup.data('datetimepicker').clear();
                }
                else {
                    this._inputGroup.data('datetimepicker').date(value);
                }
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
     * Set the value as number, use it by InputType.number
     * @param {number} num
     */
    setValueNum(num) {
        this.setValue(`${num}`);
    }
    /**
     * Return the value as number, use it by InputType.number
     * @returns {number}
     */
    getValueNum() {
        return parseInt(this.getValue(), 10) ?? 0;
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
