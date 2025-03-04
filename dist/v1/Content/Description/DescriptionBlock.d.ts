import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText.js';
/**
 * DescriptionBlockBorder
 */
export declare enum DescriptionBlockBorder {
    none = "",
    right = "border-right"
}
/**
 * DescriptionBlock
 */
export declare class DescriptionBlock extends Element {
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
    constructor(element: Element | any, border?: DescriptionBlockBorder);
    /**
     * setHeader
     * @param {string|LangText} str
     */
    setHeader(str: string | LangText): void;
    /**
     * setText
     * @param {string|LangText} str
     */
    setText(str: string | LangText): void;
    /**
     * getTextElement
     */
    getTextElement(): any;
}
