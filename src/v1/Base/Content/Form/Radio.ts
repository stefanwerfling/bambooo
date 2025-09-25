import {Component, ComponentType} from '../../Component.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * Radio
 */
export class Radio extends Component {

    /**
     * input radio
     * @protected
     */
    protected _inputRadio: JQuery;

    /**
     * label
     * @protected
     */
    protected _label: JQuery|null = null;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string|LangText|JQuery|null} label
     * @param {boolean} checked
     */
    public constructor(
        element: ComponentType,
        radionName: string,
        radioValue: string,
        label: string|LangText|JQuery|null = null,
        checked: boolean = false
    ) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="form-check" />').appendTo(telement);

        this._inputRadio = jQuery(`<input class="form-check-input" type="radio" name="${radionName}" value="${radioValue}">`).appendTo(this._element);

        if (label !== null) {
            this.setLabel(label);
        }

        this.setChecked(checked);
    }

    /**
     * Create the label object element
     * @protected
     * @return {JQuery}
     */
    protected _getLabel(): JQuery {
        if (this._label === null) {
            this._label = jQuery('<label class="form-check-label"/>').appendTo(this._element);
        }

        return this._label;
    }

    /**
     * setLabel
     * @param {string|JQuery|LangText} label
     */
    public setLabel(label: string|JQuery|LangText): void {
        const tlabel = this._getAnyElement(label);
        this._getLabel().empty().append(tlabel);
    }

    /**
     * getLabelElement
     * @returns {JQuery}
     */
    public getLabelElement(): JQuery {
        return this._getLabel();
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