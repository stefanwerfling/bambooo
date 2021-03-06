define(["require", "exports", "./Content", "./ContentHeader"], function (require, exports, Content_1, ContentHeader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ContentWrapper
     */
    class ContentWrapper {
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
        getElement() {
            return this._element;
        }
        getContentHeader() {
            return this._contentHeader;
        }
        getContent() {
            return this._content;
        }
    }
    exports.ContentWrapper = ContentWrapper;
});
//# sourceMappingURL=ContentWrapper.js.map