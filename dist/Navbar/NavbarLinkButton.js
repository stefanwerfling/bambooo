define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * NavbarLinkButton
     */
    class NavbarLinkButton extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element, icon, click) {
            super();
            this._element = jQuery('<li class="nav-item" />').appendTo(element);
            const a = jQuery('<a class="nav-link" href="#" role="button" />').appendTo(this._element);
            jQuery(`<i class="fas ${icon}" />`).appendTo(a);
            a.on('click', (event) => {
                click(event);
                return false;
            });
        }
    }
    exports.NavbarLinkButton = NavbarLinkButton;
});
//# sourceMappingURL=NavbarLinkButton.js.map