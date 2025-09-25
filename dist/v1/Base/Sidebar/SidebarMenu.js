"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenu = void 0;
class SidebarMenu {
    /**
     * Nav element
     * @protected
     */
    _navElement;
    /**
     * ul element
     * @protected
     */
    _ulElement;
    /**
     * Items
     * @protected
     */
    _items = [];
    /**
     * Constructor
     * @param {Sidebar} sidebar
     */
    constructor(sidebar) {
        this._navElement = jQuery('<nav class="mt-2" />').appendTo(sidebar.getElement());
        this._ulElement = jQuery('<ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false" />').appendTo(this._navElement);
    }
    /**
     * Get nav element
     * @return {JQuery}
     */
    getNavElement() {
        return this._navElement;
    }
    /**
     * Get ul element
     * @return {JQuery}
     */
    getUlElement() {
        return this._ulElement;
    }
    /**
     * Add menu item
     * @param {SidebarMenuItem} menuItem
     */
    addMenuItem(menuItem) {
        this._items.push(menuItem);
    }
    /**
     * Get menu item by name
     * @param {string} name
     * @return {SidebarMenuItem|null}
     */
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
        if (typeof this._ulElement.Treeview === 'function') {
            this._ulElement.Treeview();
        }
    }
}
exports.SidebarMenu = SidebarMenu;
