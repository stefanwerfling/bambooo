"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const Element_1 = require("./Element");
/**
 * Content
 */
class Content extends Element_1.Element {
    /**
     * content fluid element
     * @private
     */
    _contentFluidElement;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.content-wrapper');
        }
        if (this._element.length === 0) {
            throw Error('content element not found!');
        }
        this._contentFluidElement = jQuery('<div class="container-fluid"/>').appendTo(this._element);
    }
    /**
     * getContentFluidElement
     */
    getContentFluidElement() {
        return this._contentFluidElement;
    }
    /**
     * empty
     */
    empty() {
        this._contentFluidElement.empty();
    }
}
exports.Content = Content;
