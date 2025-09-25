"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = exports.CardShape = exports.CardLine = exports.CardType = exports.CardBodyType = void 0;
const Component_js_1 = require("../../Component.js");
const LangText_1 = require("../../../Lang/LangText");
/**
 * CardBodyType
 */
var CardBodyType;
(function (CardBodyType) {
    CardBodyType["none"] = "";
    CardBodyType["table"] = "table-responsive p-0";
    CardBodyType["profile"] = "box-profile";
})(CardBodyType || (exports.CardBodyType = CardBodyType = {}));
/**
 * CardType
 */
var CardType;
(function (CardType) {
    CardType["none"] = "";
    CardType["primary"] = "card-primary";
    CardType["success"] = "card-success";
    CardType["warning"] = "card-warning";
    CardType["danger"] = "card-danger";
    CardType["info"] = "card-info";
    CardType["secondary"] = "card-secondary";
})(CardType || (exports.CardType = CardType = {}));
/**
 * CardLine
 */
var CardLine;
(function (CardLine) {
    CardLine["none"] = "";
    CardLine["outline"] = "card-outline";
})(CardLine || (exports.CardLine = CardLine = {}));
/**
 * CardShape
 */
var CardShape;
(function (CardShape) {
    CardShape["none"] = "";
    CardShape["row"] = "card-row";
})(CardShape || (exports.CardShape = CardShape = {}));
/**
 * Card
 */
class Card extends Component_js_1.Component {
    /**
     * header element
     * @private
     */
    _header;
    /**
     * title element
     * @private
     */
    _title;
    /**
     * tools element
     * @private
     */
    _tools;
    /**
     * body element
     * @private
     */
    _body;
    /**
     * footer element
     * @private
     */
    _footer = null;
    /**
     * overload element
     * @private
     */
    _overload;
    /**
     * Constructor
     * @param {ComponentType} elementObject
     * @param {CardBodyType} bodyType
     * @param {CardType} cardType
     * @param {CardLine} cardLine
     * @param {CardShape} cardShape
     */
    constructor(elementObject, bodyType = CardBodyType.table, cardType = CardType.none, cardLine = CardLine.none, cardShape = CardShape.none) {
        super(jQuery(`<div class="card ${cardShape} ${cardType} ${cardLine}" />`).appendTo(Component_js_1.Component.getAnyElement(elementObject)));
        this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
        this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
        this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
        this._body = jQuery(`<div class="card-body ${bodyType}" />`).appendTo(this._element);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);
        this.hideLoading();
    }
    /**
     * getMainElement
     * @return {JQuery}
     */
    getMainElement() {
        return this._element;
    }
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title) {
        LangText_1.LangText.addLangText(this._title, title);
    }
    /**
     * getHeaderElement
     * @return {JQuery}
     */
    getHeaderElement() {
        return this._header;
    }
    /**
     * getTitleElement
     * @return {JQuery}
     */
    getTitleElement() {
        return this._title;
    }
    /**
     * getToolsElement
     * @return {JQuery}
     */
    getToolsElement() {
        return this._tools;
    }
    /**
     * getElement
     * @return {JQuery}
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
    /**
     * hideHeader
     */
    hideHeader() {
        this._header.hide();
    }
    /**
     * getBodyElement
     * @return {any}
     */
    getBodyElement() {
        return this._body;
    }
    /**
     * emptyBody
     */
    emptyBody() {
        this._body.empty();
    }
    /**
     * Return the footer element
     * @returns {JQuery}
     */
    getFooterElement() {
        if (this._footer === null) {
            this._footer = jQuery('<div class="card-footer"></div>').appendTo(this._element);
        }
        return this._footer;
    }
}
exports.Card = Card;
