define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * LeftNavbarLink
     */
    class LeftNavbarLink {
        /**
         * constructor
         * @param leftNavbar
         * @param title
         * @param onClickFn
         * @param linkClass
         */
        constructor(leftNavbar, title, onClickFn, linkClass = '') {
            this._liElement = jQuery('<li class="nav-item d-none d-sm-inline-block" />').appendTo(leftNavbar.getElement());
            this._aElement = jQuery(`<a href="#" class="nav-link ${linkClass}">${title}</a>`).appendTo(this._liElement);
            if (onClickFn) {
                this._aElement.on('click', onClickFn);
            }
            else if (onClickFn !== null) {
                this._aElement.on('click', () => {
                    return false;
                });
            }
        }
        /**
         * getLiElement
         */
        getLiElement() {
            return this._liElement;
        }
        /**
         * getAElement
         */
        getAElement() {
            return this._aElement;
        }
    }
    exports.LeftNavbarLink = LeftNavbarLink;
});
//# sourceMappingURL=LeftNavbarLink.js.map