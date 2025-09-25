import {Component, ComponentType} from '../../Component.js';

/**
 * RadioInputClickFn
 */
export type RadioInputClickFn = () => void;

/**
 * RadioInput
 */
export class RadioInput extends Component {

    /**
     * input radio
     * @protected
     */
    protected _inputRadio: JQuery;

    /**
     * input
     * @protected
     */
    protected _input: JQuery;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string} nameInput
     * @param {string} inputValue
     * @param {string} checked
     */
    public constructor(element: ComponentType, radionName: string, radioValue: string, nameInput: string, inputValue: string, checked: boolean = false) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="input-group" />').appendTo(telement);

        const prependGroup = jQuery('<div class="input-group-prepend" />').appendTo(this._element);
        const spanInputGroup = jQuery('<span class="input-group-text" />').appendTo(prependGroup);
        this._inputRadio = jQuery(`<input type="radio" name="${radionName}" value="${radioValue}" ${checked}>`).appendTo(spanInputGroup);
        this._input = jQuery(`<input type="text" class="form-control" name="${nameInput}" value="${inputValue}">`).appendTo(prependGroup);
    }

    /**
     * Set input Value
     * @param {string} value
     */
    public setInputValue(value: string): void {
        this._input.val(value);
    }

    /**
     * Return the input value
     * @returns {string}
     */
    public getInputValue(): string {
        return this._input.val() as string;
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

    /**
     * Set Input ReadOnly
     * @param {boolean} readonly
     */
    public setInputReadOnly(readonly: boolean): void {
        if (readonly) {
            this._input.attr('disabled', 'disabled');
        } else {
            this._input.removeAttr('disabled');
        }
    }

    /**
     * Is Input readonly
     * @returns {boolean}
     */
    public isInputReadOnly(): boolean {
        return this._input.is('[disabled=disabled]');
    }

    /**
     * Set the onclick function for radio input
     * @param {RadioInputClickFn} fn
     */
    public setOnClickFnRadio(fn: RadioInputClickFn): void {
        this._inputRadio.unbind().on('click', (): void => {
            fn();
        });
    }

}