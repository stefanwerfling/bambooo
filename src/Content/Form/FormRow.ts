import {Element} from '../../Element';

/**
 * FormRow
 */
export class FormRow extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        this._element = jQuery('<div class="row" />').appendTo(element);
    }

    /**
     * createCol
     * @param size
     */
    public createCol(size: number): any {
        return jQuery(`<div class="col-sm-${size}">`).appendTo(this._element);
    }
}