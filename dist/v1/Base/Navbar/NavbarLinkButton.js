"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarLinkButton = void 0;
const Component_js_1 = require("../Component.js");
/**
 * NavbarLinkButton
 */
class NavbarLinkButton extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} icon
     * @param {NavbarLinkButtonFn} click
     */
    constructor(element, icon, click) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<li class="nav-item" />').appendTo(telement);
        const a = jQuery('<a class="nav-link" href="#" role="button" />').appendTo(this._element);
        jQuery(`<i class="fas ${icon}" />`).appendTo(a);
        a.on('click', (event) => {
            click(event);
            return false;
        });
    }
}
exports.NavbarLinkButton = NavbarLinkButton;
