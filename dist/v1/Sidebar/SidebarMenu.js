"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenu = void 0;
class SidebarMenu {
    _navElement;
    _ulElement;
    _items = [];
    constructor(sidebar) {
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
    /**
     * initTreeview
     */
    initTreeview() {
        const oscontent = this._navElement.parent().find('.os-content');
        if (oscontent.length > 0) {
            this._navElement.detach().appendTo(oscontent);
        }
        this._ulElement.Treeview();
    }
}
exports.SidebarMenu = SidebarMenu;
