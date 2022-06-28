define(["require", "exports", "./Navbar/LeftNavbar", "./Navbar/RightNavbar"], function (require, exports, LeftNavbar_1, RightNavbar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Navbar
     */
    class Navbar {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            this._rightNavbar = null;
            if (element) {
                this._element = element;
            }
            else {
                throw Error('navbar element not found!');
            }
            this._leftNavbar = new LeftNavbar_1.LeftNavbar(this._element);
        }
        /**
         * getLeftNavbar
         */
        getLeftNavbar() {
            return this._leftNavbar;
        }
        /**
         * getRightNavbar
         */
        getRightNavbar() {
            if (this._rightNavbar === null) {
                this._rightNavbar = new RightNavbar_1.RightNavbar(this._element);
            }
            return this._rightNavbar;
        }
    }
    exports.Navbar = Navbar;
});
//# sourceMappingURL=Navbar.js.map