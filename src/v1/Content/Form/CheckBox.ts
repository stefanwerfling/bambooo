import {Element} from '../../Element';

export class CheckBox extends Element {

    /**
     * input
     * @protected
     */
    protected _input: any;

    /**
     * label
     * @protected
     */
    protected _label: any;

    /**
     * constructor
     * @param element
     * @param label
     */
    public constructor(element: any, label: any = '') {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-check" />').appendTo(this._element);

        this._input = jQuery(`<input type="checkbox" class="form-check-input">`).appendTo(this._element);
        this._label = jQuery(`<label class="form-check-label">`).appendTo(this._element);

        this.setLabel(label);
    }

    /**
     * setLabel
     * @param label
     */
    public setLabel(label: any): void {
        this._label.empty().append(label);
    }

    /**
     * setReadOnly
     * @param readonly
     */
    public setReadOnly(readonly: boolean): void {
        if (readonly) {
            this._input.attr('disabled', 'disabled');
        } else {
            this._input.removeAttr('disabled');
        }
    }

    /**
     * isReadOnly
     */
    public isReadOnly(): boolean {
        return this._input.is('[disabled=disabled]');
    }

    /**
     * is box checked
     * @returns {boolean}
     */
    public isChecked(): boolean {
        return this._input.is(':checked');
    }

    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    public setChecked(checked: boolean): void {
        if (checked) {
            this._input.attr('checked', 'checked');
        } else {
            this._input.removeAttr('checked');
        }
    }
}