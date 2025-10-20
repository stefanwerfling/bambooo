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
export class PText extends Component<HTMLElement> {

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
     * @param {ComponentType|string} value
     */
    public addValue(value: ComponentType|string): void {
        if (typeof value === 'string') {
            this.addText(value);
        } else {
            this.addComponent(value);
        }
    }

    /**
     * Add a text
     * @param {string} text
     */
    public addText(text: string): void {
        this._element.append(text);
    }

    /**
     * Add component
     * @param {ComponentType} component
     */
    public addComponent(component: ComponentType): void {
        this._element.append(this._getAnyElement(component));
    }

}