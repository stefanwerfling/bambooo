import {Element} from '../../Element';

/**
 * FormRow
 */
export class FormRow extends Element {

    /**
     * constructor
     * @param {any} element
     * @param {string} style
     */
    public constructor(element: any, style: string = '') {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="row ${style}" />`).appendTo(telement);
    }

    /**
     * createCol
     * @param {number} size
     * @param {[string]} addClass
     */
    public createCol(size: number, addClass?: string): any {
        let tclass = `col-sm-${size}`;

        if (tclass) {
            tclass = `${tclass} ${addClass}`;
        }

        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }
}