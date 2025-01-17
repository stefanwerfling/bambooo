import {Element} from '../../Element';
import {LangText} from '../../Lang/LangText';

/**
 * FormGroup
 */
export class FormGroup extends Element {

    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLElement>;

    /**
     * constructor
     * @param {JQuery<HTMLElement>} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    public constructor(element: JQuery<HTMLElement>|Element, label?: string|JQuery<HTMLElement>|LangText) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="form-group" />').appendTo(telement);
        this._label = jQuery('<label/>').appendTo(this._element);

        if (label) {
            this.setLabel(label);
        }
    }

    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    public setLabel(label: string|JQuery<HTMLElement>|LangText): void {
        const tlabel = this._getAnyElement(label);
        this._label.empty().append(tlabel);
    }

    /**
     * getLabelElement
     * @returns {JQuery<HTMLElement>}
     */
    public getLabelElement(): JQuery<HTMLElement> {
        return this._label;
    }

    /**
     * Clear the elements from group
     */
    public clear(): void {
        this._label.detach();
        this._element.empty();
        this._label.appendTo(this._element);
    }

}