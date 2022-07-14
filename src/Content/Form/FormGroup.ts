import {Element} from '../../Element';

/**
 * FormGroup
 */
export class FormGroup extends Element {

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
    public constructor(element: any, label?: any) {
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
     * @param label
     */
    public setLabel(label: any): void {
        this._label.empty().append(label);
    }

}