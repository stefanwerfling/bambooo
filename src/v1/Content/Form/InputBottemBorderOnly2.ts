import moment from 'moment';
import {Element} from '../../Element';
import {Icon, IconFa} from '../Icon/Icon';
import {FormGroupButton} from './FormGroupButton';

/**
 * InputType
 */
export enum InputType {
    text = 'text',
    number = 'number',
    range = 'range',
    password = 'password',
    colorpicker = 'colorpicker',
    date = 'date',
    datetime = 'datetime',
    time = 'time',
    daterange = 'daterange'
}

export interface InputDateRanges {
    [key: string]: string|any;
}

export type InputTypeOptions = {
    ranges?: InputDateRanges;
    date_format?: string;
    time_format?: string;
    lang?: string;
};

/**
 * InputBottemBorderOnly2
 */
export class InputBottemBorderOnly2 extends Element {

    /**
     * type
     * @protected
     */
    protected _type: InputType = InputType.text;

    /**
     * Options
     * @protected
     */
    protected _options: InputTypeOptions;

    /**
     * input group
     * @protected
     */
    protected _inputGroup: any|null = null;

    /**
     * Constructor
     * @param {any} element
     * @param {string} id
     * @param {InputType} type
     * @param {InputTypeOptions} options
     */
    public constructor(element: any, id?: string, type: InputType = InputType.text, options: InputTypeOptions = {}) {
        super();

        this._type = type;
        this._options = options;

        let tid = id;
        let telement = this._getAnyElement(element);
        let ttype = `${type}`;
        let useInputGroup: string|null = null;
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

        let aid: string = '';
        let dataTarget: string = '';

        if (tid !== undefined && tid !== null) {
            aid = `id="${tid}"`;
            dataTarget = `data-target=#${tid}`;
        }

        if (useInputGroup) {
            this._inputGroup = jQuery(`<div class="input-group ${useInputGroup}" id="${tid}g" data-target-input="nearest"></div>`).appendTo(telement);
            telement = this._inputGroup;
        }

        this._element = jQuery(`<input type="${ttype}" class="form-control form-control-border border-width-2 ${iclasses}" ${aid} ${dataTarget} placeholder="">`);

        if (element instanceof FormGroupButton) {
            this._element.prependTo(telement);
        } else {
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
                        new Icon(button, IconFa.calendar);

                        let dformat = 'YYYY-MM-DD';

                        if (this._options.date_format) {
                            dformat = this._options.date_format;
                        }

                        this._element.datetimepicker({
                            format: dformat,
                            lang: lang
                        });
                        break;

                    // Time --------------------------------------------------------------------------------------------
                    case InputType.time:
                        new Icon(button, IconFa.clock);

                        let tformat = 'hh:mm';

                        if (this._options.time_format) {
                            tformat = this._options.time_format;
                        }

                        this._element.datetimepicker({
                            format: tformat,
                            lang: lang
                        });
                        break;

                    // Date-Range --------------------------------------------------------------------------------------
                    case InputType.daterange:
                        new Icon(button, IconFa.calendar);

                        let drformat = 'YYYY-MM-DD';

                        if (this._options.date_format) {
                            drformat = this._options.date_format;
                        }

                        let ranges: InputDateRanges = {};

                        if (this._options.ranges) {
                            ranges = this._options.ranges;
                        }

                        this._element.datetimepicker({
                            format: drformat,
                            ranges: ranges,
                            lang: lang,
                            startDate: moment().startOf('month'),
                            endDate: moment().endOf('month')
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
    public setPlaceholder(placeholder: string): void {
        this._element.attr('placeholder', placeholder);
    }

    /**
     * setValue
     * @param value
     */
    public setValue(value: string): void {
        switch (this._type) {
            case InputType.date:
            case InputType.time:
                if (value === '') {
                    this._element.data('datetimepicker').clear();
                } else {
                    this._element.data('datetimepicker').date(value);
                }
                break;

            default:
                this._element.val(value);
        }
    }

    /**
     * getValue
     */
    public getValue(): string {
        return this._element.val();
    }

    /**
     * Set the value as number, use it by InputType.number
     * @param {number} num
     */
    public setValueNum(num: number): void {
        this.setValue(`${num}`);
    }

    /**
     * Return the value as number, use it by InputType.number
     * @returns {number}
     */
    public getValueNum(): number {
        return parseInt(this.getValue(), 10) ?? 0;
    }

    /**
     * setReadOnly
     * @param readonly
     */
    public setReadOnly(readonly: boolean): void {
        if (readonly) {
            this._element.attr('disabled', 'disabled');
        } else {
            this._element.removeAttr('disabled');
        }
    }

    /**
     * isReadOnly
     */
    public isReadOnly(): boolean {
        return this._element.is('[disabled=disabled]');
    }
}