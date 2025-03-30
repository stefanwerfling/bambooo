import { LangText } from './../Lang/LangText.js';
/**
 * Content header
 */
export declare class ContentHeader {
    /**
     * Element
     * @private
     */
    private _element;
    /**
     * Title
     * @private
     */
    private _title;
    /**
     * constructor
     * @param {[any]} element
     */
    constructor(element?: any);
    /**
     * Return the element
     * @returns {any}
     */
    getElement(): any;
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
