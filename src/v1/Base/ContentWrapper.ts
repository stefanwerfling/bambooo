import {Content} from './Content';
import {ContentHeader} from './ContentHeader';

/**
 * ContentWrapper
 */
export class ContentWrapper {

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
    public constructor(element?: JQuery) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.content-wrapper');
        }

        if (this._element.length === 0) {
            throw Error('content wrapper element not found!');
        }

        const ch = jQuery('<div class="content-header" />').appendTo(this._element);
        this._contentHeader = new ContentHeader(ch);

        const c = jQuery('<section class="content" />').appendTo(this._element);
        this._content = new Content(c);
    }

    /**
     * getElement
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

    /**
     * getContentHeader
     */
    public getContentHeader(): ContentHeader {
        return this._contentHeader;
    }

    /**
     * getContent
     */
    public getContent(): Content {
        return this._content;
    }

}