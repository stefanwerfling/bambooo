import {Component, ComponentType} from '../../Component.js';
import {LangText} from '../../../Lang/LangText.js';

/**
 * CheckBoxClickFn
 */
export type CheckBoxClickFn = () => void;

/**
 * Check Box
 */
export class CheckBox extends Component<HTMLDivElement> {

    /**
     * input
     * @protected
     */
    protected _input: JQuery;

    /**
     * label
     * @protected
     */
    protected _label: JQuery;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string|JQuery|LangText} label
     */
    public constructor(element: ComponentType, label: string|JQuery|LangText = '') {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery<HTMLDivElement>('<div class="form-check" />').appendTo(telement);

        this._input = jQuery(`<input type="checkbox" class="form-check-input">`).appendTo(this._element);
        this._label = jQuery(`<label class="form-check-label">`).appendTo(this._element);

        this.setLabel(label);
    }

    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    public setLabel(label: string|JQuery|LangText): void {
        const tlabel = this._getAnyElement(label);

        this._label.empty().append(tlabel);
    }

    /**
     * setReadOnly
     * @param {boolean} readonly
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
     * @return {boolean}
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

    /**
     * Set the onclick function for checkbox
     * @param {CheckBoxClickFn} fn
     */
    public setOnClickFn(fn: CheckBoxClickFn): void {
        this._input.off('click').on('click', (): void => {
            fn();
        });
    }
}