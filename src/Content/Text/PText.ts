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
     * @param element
     * @param type
     */
    public constructor(element: any, type: PTextType = PTextType.muted, align: TextAlignment = TextAlignment.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<p class="${type}" />`).appendTo(telement);
        this._element.addClass(`${align}`);
    }

    /**
     * addValue
     * @param value
     */
    public addValue(value: any): void {
        this._element.append(value);
    }

}