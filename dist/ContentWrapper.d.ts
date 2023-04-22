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
    private _element;
    /**
     * content header
     * @private
     */
    private _contentHeader;
    /**
     * content
     * @private
     */
    private _content;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getElement
     */
    getElement(): any;
    /**
     * getContentHeader
     */
    getContentHeader(): ContentHeader;
    /**
     * getContent
     */
    getContent(): Content;
}
