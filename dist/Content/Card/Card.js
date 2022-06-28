define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * CardBodyType
     */
    var CardBodyType;
    (function (CardBodyType) {
        CardBodyType["none"] = "";
        CardBodyType["table"] = "table-responsive p-0";
    })(CardBodyType = exports.CardBodyType || (exports.CardBodyType = {}));
    /**
     * Card
     */
    class Card extends Element_1.Element {
        /**
         * constructor
         * @param elementObject
         */
        constructor(elementObject, bodyType = CardBodyType.table) {
            super();
            const telement = this._getAnyElement(elementObject);
            this._element = jQuery('<div class="card" />').appendTo(telement);
            this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
            this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
            this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
            this._body = jQuery(`<div class="card-body ${bodyType}" />`).appendTo(this._element);
            this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);
            this.hideLoading();
        }
        /**
         * setTitle
         * @param title
         */
        setTitle(title) {
            this._title.empty().append(title);
        }
        /**
         * getTitleElement
         */
        getTitleElement() {
            return this._title;
        }
        /**
         * getToolsElement
         */
        getToolsElement() {
            return this._tools;
        }
        /**
         * getElement
         */
        getElement() {
            return this._body;
        }
        /**
         * showLoading
         */
        showLoading() {
            this._overload.show();
        }
        /**
         * hideLoading
         */
        hideLoading() {
            this._overload.hide();
        }
    }
    exports.Card = Card;
});
//# sourceMappingURL=Card.js.map