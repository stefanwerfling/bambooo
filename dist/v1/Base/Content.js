"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
const Component_js_1 = require("./Component.js");
/**
 * Content
 */
class Content extends Component_js_1.Component {
    /**
     * content fluid element
     * @private
     */
    _contentFluidElement;
    /**
     * Constructor
     * @param {JQuery} element
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
     * @return {any}
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
