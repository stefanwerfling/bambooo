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
    private _element: any;

    /**
     * content header
     * @private
     */
    private _contentHeader: ContentHeader;

    /**
     * content
     * @private
     */
    private _content: Content;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
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
     */
    public getElement(): any {
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