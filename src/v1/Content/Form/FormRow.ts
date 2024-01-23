import {Element} from '../../Element';

export enum FormRowColType {
    none = 0,
    sm = 1
}

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
    public createCol(size: number, colType: FormRowColType = FormRowColType.sm, addClass?: string): any {
        let tclass = `col`;

        switch (colType) {
            case FormRowColType.none:
                break;

            case FormRowColType.sm:
                tclass = `${tclass}-sm`;
                break;
        }

        tclass = `${tclass}-${size}`;

        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }

        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }
}