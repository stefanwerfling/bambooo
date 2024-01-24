import { LangText } from './Lang/LangText';
/**
 * Content header
 */
export declare class ContentHeader {
    private _element;
    /**
     * Title
     * @private
     */
    private _title;
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
