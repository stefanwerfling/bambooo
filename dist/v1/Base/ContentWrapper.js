"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentWrapper = void 0;
const Content_1 = require("./Content");
const ContentHeader_1 = require("./ContentHeader");
/**
 * ContentWrapper
 */
class ContentWrapper {
    /**
     * element
     * @private
     */
    _element;
    /**
     * content header
     * @private
     */
    _contentHeader;
    /**
     * content
     * @private
     */
    _content;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.content-wrapper');
        }
        if (this._element.length === 0) {
            throw Error('content wrapper element not found!');
        }
        const ch = jQuery('<div class="content-header" />').appendTo(this._element);
        this._contentHeader = new ContentHeader_1.ContentHeader(ch);
        const c = jQuery('<section class="content" />').appendTo(this._element);
        this._content = new Content_1.Content(c);
    }
    /**
     * getElement
     * @return {JQuery}
     */
    getElement() {
        return this._element;
    }
    /**
     * getContentHeader
     */
    getContentHeader() {
        return this._contentHeader;
    }
    /**
     * getContent
     */
    getContent() {
        return this._content;
    }
}
exports.ContentWrapper = ContentWrapper;
