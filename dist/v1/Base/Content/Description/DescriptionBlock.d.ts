import { Component, ComponentType } from '../../Component.js';
import { LangText } from '../../../Lang/LangText.js';
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
export declare class DescriptionBlock extends Component<HTMLDivElement> {
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
    constructor(element: ComponentType, border?: DescriptionBlockBorder);
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
     * Get text element
     * @return {JQuery}
     */
    getTextElement(): JQuery<HTMLSpanElement>;
}
