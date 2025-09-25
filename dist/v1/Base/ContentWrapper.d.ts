import { Content } from './Content';
import { ContentHeader } from './ContentHeader';
/**
 * ContentWrapper
 */
export declare class ContentWrapper {
    /**
     * element
     * @private
     */
    protected _element: JQuery;
    /**
     * content header
     * @private
     */
    protected _contentHeader: ContentHeader;
    /**
     * content
     * @private
     */
    protected _content: Content;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element?: JQuery);
    /**
     * getElement
     * @return {JQuery}
     */
    getElement(): JQuery;
    /**
     * getContentHeader
     */
    getContentHeader(): ContentHeader;
    /**
     * getContent
     */
    getContent(): Content;
}
