import {Component, ComponentType} from '../../Component.js';
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
export class PText extends Component {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {PTextType} type
     * @param {TextAlignment} align
     */
    public constructor(element: ComponentType, type: PTextType = PTextType.muted, align: TextAlignment = TextAlignment.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<p class="${type}" />`).appendTo(telement);
        this._element.addClass(`${align}`);
    }

    /**
     * Add value
     * @param {ComponentType} value
     */
    public addValue(value: ComponentType): void {
        const telement = this._getAnyElement(value);

        this._element.append(telement);
    }

}