"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentDisable = void 0;
const Component_js_1 = require("../Component.js");
/**
 * ContentDisable
 */
class ContentDisable extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="overlay dark"></div>').appendTo(telement);
    }
}
exports.ContentDisable = ContentDisable;
