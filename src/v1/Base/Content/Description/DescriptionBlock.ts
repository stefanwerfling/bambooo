import {Component, ComponentType} from '../../Component.js';
import {LangText} from '../../../Lang/LangText.js';

/**
 * DescriptionBlockBorder
 */
export enum DescriptionBlockBorder {
    none = '',
    right = 'border-right'
}

/**
 * DescriptionBlock
 */
export class DescriptionBlock extends Component<HTMLDivElement> {

    /**
     * h5
     * @protected
     */
    protected _h5: JQuery<HTMLHeadingElement>;

    /**
     * span
     * @protected
     */
    protected _span: JQuery<HTMLSpanElement>;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionBlockBorder} border
     */
    public constructor(element: ComponentType, border: DescriptionBlockBorder = DescriptionBlockBorder.right) {
        super(jQuery<HTMLDivElement>(`<div class="description-block ${border}" />`).appendTo(Component.getAnyElement(element)));
        this._h5 = jQuery<HTMLHeadingElement>('<h5 class="description-header" />').appendTo(this._element);
        this._span = jQuery<HTMLSpanElement>('<span class="description-text" />').appendTo(this._element);
    }

    /**
     * setHeader
     * @param {string|LangText} str
     */
    public setHeader(str: string|LangText): void {
        LangText.addLangText(this._h5.empty(), str);
    }

    /**
     * setText
     * @param {string|LangText} str
     */
    public setText(str: string|LangText): void {
        LangText.addLangText(this._span.empty(), str);
    }

    /**
     * Get text element
     * @return {JQuery}
     */
    public getTextElement(): JQuery<HTMLSpanElement> {
        return this._span;
    }

}