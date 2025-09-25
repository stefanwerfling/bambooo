"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RightNavbar = void 0;
const Component_js_1 = require("../Component.js");
/**
 * RightNavbar
 */
class RightNavbar extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        if (telement) {
            this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(telement);
        }
        else {
            throw Error('right navbar element not found!');
        }
    }
}
exports.RightNavbar = RightNavbar;
