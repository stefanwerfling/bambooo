import {Element} from '../../Element';
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
export class DescriptionBlock extends Element {

    /**
     * h5
     * @protected
     */
    protected _h5: any;

    /**
     * span
     * @protected
     */
    protected _span: any;

    /**
     * constructor
     * @param element
     * @param border
     */
    public constructor(element: Element|any, border: DescriptionBlockBorder = DescriptionBlockBorder.right) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<div class="description-block ${border}" />`).appendTo(telement);
        this._h5 = jQuery('<h5 class="description-header" />').appendTo(this._element);
        this._span = jQuery('<span class="description-text" />').appendTo(this._element);
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
     * getTextElement
     */
    public getTextElement(): any {
        return this._span;
    }

}