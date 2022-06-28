define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SidebarUserPanel {
        constructor(sidebar) {
            this._image = '';
            this._username = '';
            this._divElement = jQuery('<div class="user-panel mt-3 pb-3 mb-3 d-flex" />').prependTo(sidebar.getElement());
        }
        setImage(url) {
            this._image = url;
            this.render();
        }
        setUsername(username) {
            this._username = username;
            this.render();
        }
        render() {
            this._divElement.empty();
            if (this._image !== '') {
                this._divElement.append(`<div class="image"><img src="${this._image}" class="img-circle elevation-2" alt="User Image"></div>`);
            }
            this._divElement.append(`<div class="info"><a href="#" class="d-block">${this._username}</a></div>`);
        }
    }
    exports.SidebarUserPanel = SidebarUserPanel;
});
//# sourceMappingURL=SidebarUserPanel.js.map