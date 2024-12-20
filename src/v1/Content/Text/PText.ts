import {Element} from '../../Element';
import {TextAlignment} from './Text';

export enum PTextType {
    success = 'text-success',
    info = 'text-info',
    primary = 'text-primary',
    danger = 'text-danger',
    warning = 'text-warning',
    muted = 'text-muted'
}

/**
 * PText
 */
export class PText extends Element {

    /**
     * constructor
     * @param {any|Element} element
     * @param {PTextType} type
     * @param {TextAlignment} align
     */
    public constructor(element: any|Element, type: PTextType = PTextType.muted, align: TextAlignment = TextAlignment.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<p class="${type}" />`).appendTo(telement);
        this._element.addClass(`${align}`);
    }

    /**
     * Add value
     * @param {any|Element} value
     */
    public addValue(value: any|Element): void {
        const telement = this._getAnyElement(value);

        this._element.append(telement);
    }

}