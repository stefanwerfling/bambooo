import {Element} from '../../Element';

/**
 * FormRow
 */
export class FormRow extends Element {

    /**
     * constructor
     * @param element
     * @param style
     */
    public constructor(element: any, style: string = '') {
        super();

        this._element = jQuery(`<div class="row ${style}" />`).appendTo(element);
    }

    /**
     * createCol
     * @param size
     */
    public createCol(size: number): any {
        return jQuery(`<div class="col-sm-${size}">`).appendTo(this._element);
    }
}