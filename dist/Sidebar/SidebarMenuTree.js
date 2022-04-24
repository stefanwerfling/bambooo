"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuTree = void 0;
/**
 * SidebarMenuTree
 */
class SidebarMenuTree {
    /**
     * constructor
     * @param sidebarMenuItem
     */
    constructor(sidebarMenuItem) {
        this._items = [];
        const pelement = jQuery(sidebarMenuItem.getPElement());
        pelement.find('i').remove();
        pelement.append(jQuery('<i class="fas fa-angle-left right" />'));
        this._ulElement = jQuery('<ul class="nav nav-treeview" style="display: block;" />').appendTo(sidebarMenuItem.getLiElement());
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
exports.SidebarMenuTree = SidebarMenuTree;
