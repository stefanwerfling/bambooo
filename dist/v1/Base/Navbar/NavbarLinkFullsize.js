"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarLinkFullsize = void 0;
const Component_js_1 = require("../Component.js");
/**
 * NavbarLinkFullsize
 */
class NavbarLinkFullsize extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<li class="nav-item" />').appendTo(telement);
        const a = jQuery('<a class="nav-link" data-widget="fullscreen" href="#" role="button" />').appendTo(this._element);
        jQuery('<i class="fas fa-expand-arrows-alt" />').appendTo(a);
    }
}
exports.NavbarLinkFullsize = NavbarLinkFullsize;
