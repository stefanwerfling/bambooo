define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SidebarMenu {
        constructor(sidebar) {
            this._items = [];
            this._navElement = jQuery('<nav class="mt-2" />').appendTo(sidebar.getElement());
            this._ulElement = jQuery('<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" />').appendTo(this._navElement);
        }
        getNavElement() {
            return this._navElement;
        }
        getUlElement() {
            return this._ulElement;
        }
        addMenuItem(menuItem) {
            this._items.push(menuItem);
        }
        getMenuItem(name) {
            for (const item of this._items) {
                if (item.getName() === name) {
                    return item;
                }
            }
            return null;
        }
    }
    exports.SidebarMenu = SidebarMenu;
});
//# sourceMappingURL=SidebarMenu.js.map