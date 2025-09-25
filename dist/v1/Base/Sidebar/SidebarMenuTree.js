"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuTree = void 0;
/**
 * SidebarMenuTree
 */
class SidebarMenuTree {
    /**
     * Ul element
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
     * @param {SidebarMenuItem} sidebarMenuItem
     */
    constructor(sidebarMenuItem) {
        const pelement = jQuery(sidebarMenuItem.getPElement());
        pelement.find('i').remove();
        pelement.append(jQuery('<i class="fas fa-angle-left right" />'));
        this._ulElement = jQuery('<ul class="nav nav-treeview" style="display: block;" />').appendTo(sidebarMenuItem.getLiElement());
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
     * Return menu item by name
     * @param {SidebarMenuItem|null} name
     */
    getMenuItem(name) {
        for (const item of this._items) {
            if (item.getName() === name) {
                return item;
            }
        }
        return null;
    }
}
exports.SidebarMenuTree = SidebarMenuTree;
