import {Component, ComponentType} from '../../Component.js';

export enum FormRowColType {
    none = 0,
    sm = 1,
    lg = 2,
    auto = 3
}

/**
 * FormRow
 */
export class FormRow extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} style
     */
    public constructor(element: ComponentType, style: string = '') {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="row ${style}" />`).appendTo(telement);
    }

    /**
     * create a col element
     * @param {number} size
     * @param {FormRowColType} colType
     * @param {[string]} addClass
     * @returns {JQuery}
     */
    public createCol(size: number, colType: FormRowColType = FormRowColType.sm, addClass?: string): JQuery {
        let tclass = `col`;
        let tsize = size;

        switch (colType) {
            case FormRowColType.none:
                break;

            case FormRowColType.sm:
                tclass = `${tclass}-sm`;
                break;

            case FormRowColType.lg:
                tclass = `${tclass}-lg`;
                break;

            case FormRowColType.auto:
                tclass = `${tclass}-auto`;
                tsize = 0;
                break;
        }

        if (tsize > 0) {
            tclass = `${tclass}-${size}`;
        }

        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }

        return jQuery(`<div class="${tclass}">`).appendTo(this._element);
    }

    /**
     * Create auto col element
     * @param {string} addClass
     * @returns {JQuery}
     */
    public createAutoCol(addClass?: string): JQuery {
        return this.createCol(0, FormRowColType.auto, addClass);
    }

}