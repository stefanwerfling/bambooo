define(["require", "exports", "./SidebarMenu", "./SidebarUserPanel"], function (require, exports, SidebarMenu_1, SidebarUserPanel_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Sidebar {
        constructor(element) {
            this._userPanel = null;
            this._menu = null;
            if (element) {
                this._element = element;
            }
            else {
                throw Error('sidebar element not found!');
            }
        }
        getMenu() {
            if (this._menu === null) {
                this._menu = new SidebarMenu_1.SidebarMenu(this);
            }
            return this._menu;
        }
        getUserPanel() {
            if (this._userPanel === null) {
                this._userPanel = new SidebarUserPanel_1.SidebarUserPanel(this);
            }
            return this._userPanel;
        }
        getElement() {
            return this._element;
        }
    }
    exports.Sidebar = Sidebar;
});
//# sourceMappingURL=Sidebar.js.map