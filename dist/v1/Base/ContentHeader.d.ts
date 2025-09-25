import { LangText } from './../Lang/LangText.js';
/**
 * Content header
 */
export declare class ContentHeader {
    /**
     * Element
     * @private
     */
    protected _element: any;
    /**
     * Title
     * @private
     */
    protected _title: string | LangText;
    /**
     * constructor
     * @param {[JQuery]} element
     */
    constructor(element?: JQuery);
    /**
     * Return the element
     * @returns {JQuery}
     */
    getElement(): JQuery;
    /**
     * Set the title
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * Return the content header title
     * @returns {string|LangText}
     */
    getTitle(): string | LangText;
}
