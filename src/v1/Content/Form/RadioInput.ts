import {Element} from '../../Element';

/**
 * RadioInput
 */
export class RadioInput extends Element {

    /**
     * input radio
     * @protected
     */
    protected _inputRadio: any;

    /**
     * input
     * @protected
     */
    protected _input: any;

    /**
     * Constructor
     * @param {any} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string} nameInput
     * @param {string} inputValue
     * @param {string} checked
     */
    public constructor(element: any, radionName: string, radioValue: string, nameInput: string, inputValue: string, checked: boolean = false) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="input-group" />').appendTo(telement);

        const prependGroup = jQuery('<div class="input-group-prepend" />').appendTo(this._element);
        const spanInputGroup = jQuery('<span class="input-group-text" />').appendTo(prependGroup);
        this._inputRadio = jQuery(`<input type="radio" name="${radionName}" value="${radioValue}" ${checked}>`).appendTo(spanInputGroup);
        this._input = jQuery(`<input type="text" class="form-control" name="${nameInput}" value="${inputValue}">`).appendTo(prependGroup);
    }

    /**
     * Set Value
     * @param value
     */
    public setValue(value: string): void {
        this._input.val(value);
    }

    /**
     * getValue
     */
    public getValue(): string {
        return this._element.val();
    }

    /**
     * is box checked
     * @returns {boolean}
     */
    public isChecked(): boolean {
        return this._inputRadio.is(':checked');
    }

    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    public setChecked(checked: boolean): void {
        if (checked) {
            this._inputRadio.attr('checked', 'checked');
        } else {
            this._inputRadio.removeAttr('checked');
        }
    }
}