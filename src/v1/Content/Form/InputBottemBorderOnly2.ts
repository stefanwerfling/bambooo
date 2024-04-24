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
    time = 'time'
}

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
     * input group
     * @protected
     */
    protected _inputGroup: any|null = null;

    /**
     * constructor
     * @param element
     * @param id
     * @param type
     */
    public constructor(element: any, id?: string, type: InputType = InputType.text) {
        super();

        this._type = type;

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
                ttype = `${InputType.text}`;
                useInputGroup = 'date';
                iclasses = 'datetimepicker-input';

                if (tid === undefined) {
                    tid = `input${this._uniqId()}`;
                }
                break;
        }

        let aid: string = '';

        if (tid !== undefined && tid !== null) {
            aid = `id="${tid}"`;
        }

        if (useInputGroup) {
            this._inputGroup = jQuery(`<div class="input-group ${useInputGroup}" id="${tid}" data-target-input="nearest"></div>`).appendTo(telement);
            telement = this._inputGroup;
        }

        this._element = jQuery(`<input type="${ttype}" class="form-control form-control-border border-width-2 ${iclasses}" ${aid} placeholder="">`);

        if (element instanceof FormGroupButton) {
            this._element.prependTo(telement);
        } else {
            this._element.appendTo(telement);
        }

        switch (type) {
            case InputType.colorpicker:
                this._element.colorpicker();
                break;

            case InputType.date:
            case InputType.time:
                const appendInputGroup = jQuery(`<div class="input-group-append" data-target="#${id}" data-toggle="datetimepicker"></div>`).appendTo(telement);
                const button = jQuery('<div class="input-group-text"></div>').appendTo(appendInputGroup);

                switch (type) {
                    case InputType.date:
                        new Icon(button, IconFa.calendar);

                        this._inputGroup.datetimepicker({
                            format: 'YYYY.MM.DD',
                            lang: 'de'
                        });
                        break;

                    case InputType.time:
                        new Icon(button, IconFa.clock);

                        this._inputGroup.datetimepicker({
                            format: 'LT',
                            lang: 'de'
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
                    this._inputGroup.data('datetimepicker').clear();
                } else {
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
    public getValue(): string {
        return this._element.val();
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