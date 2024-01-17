import { Element } from '../../Element';
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
    constructor(element: any, border?: DescriptionBlockBorder);
    /**
     * setHeader
     * @param str
     */
    setHeader(str: string): void;
    /**
     * setText
     * @param str
     */
    setText(str: string): void;
    /**
     * getTextElement
     */
    getTextElement(): any;
}
