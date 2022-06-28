define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class LeftNavbarPushmenu {
        constructor(leftNavbar) {
            this._li = jQuery('<li class="nav-item" />').appendTo(leftNavbar.getElement());
            jQuery('<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>').appendTo(this._li);
        }
        getLiElement() {
            return this._li;
        }
    }
    exports.LeftNavbarPushmenu = LeftNavbarPushmenu;
});
//# sourceMappingURL=LeftNavbarPushmenu.js.map