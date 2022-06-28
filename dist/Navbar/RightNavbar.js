define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * RightNavbar
     */
    class RightNavbar {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            if (element) {
                this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(element);
            }
            else {
                throw Error('right navbar element not found!');
            }
        }
        /**
         * getElement
         */
        getElement() {
            return this._element;
        }
    }
    exports.RightNavbar = RightNavbar;
});
//# sourceMappingURL=RightNavbar.js.map