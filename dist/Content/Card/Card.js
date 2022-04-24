"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const Element_1 = require("../../Element");
/**
 * Card
 */
class Card extends Element_1.Element {
    constructor(elementObject) {
        super();
        this._element = jQuery('<div class="card" />').appendTo(elementObject.getElement());
        this._header = jQuery('<div class="card-header"/>').appendTo(this._element);
        this._title = jQuery('<h3 class="card-title"/>').appendTo(this._header);
        this._tools = jQuery('<div class="card-tools"/>').appendTo(this._header);
        this._body = jQuery('<div class="card-body table-responsive p-0" />').appendTo(this._element);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._element);
        this.hideLoading();
    }
    setTitle(title) {
        this._title.empty().append(title);
    }
    getToolsElement() {
        return this._tools;
    }
    getElement() {
        return this._body;
    }
    showLoading() {
        this._overload.show();
    }
    hideLoading() {
        this._overload.hide();
    }
}
exports.Card = Card;
