import {SidebarMenuItem} from './SidebarMenuItem';

/**
 * SidebarMenuTree
 */
export class SidebarMenuTree {

    /**
     * Ul element
     * @protected
     */
    protected _ulElement: JQuery;

    /**
     * Items
     * @protected
     */
    protected _items: SidebarMenuItem[] = [];

    /**
     * Constructor
     * @param {SidebarMenuItem} sidebarMenuItem
     */
    public constructor(sidebarMenuItem: SidebarMenuItem) {
        const pelement = jQuery(sidebarMenuItem.getPElement());

        pelement.find('i').remove();
        pelement.append(jQuery('<i class="fas fa-angle-left right" />'));

        this._ulElement = jQuery('<ul class="nav nav-treeview" style="display: block;" />').appendTo(sidebarMenuItem.getLiElement());
    }

    /**
     * Get ul element
     * @return {JQuery}
     */
    public getUlElement(): JQuery {
        return this._ulElement;
    }

    /**
     * Add menu item
     * @param {SidebarMenuItem} menuItem
     */
    public addMenuItem(menuItem: SidebarMenuItem): void {
        this._items.push(menuItem);
    }

    /**
     * Return menu item by name
     * @param {SidebarMenuItem|null} name
     */
    public getMenuItem(name: string): SidebarMenuItem|null {
        for (const item of this._items) {
            if (item.getName() === name) {
                return item;
            }
        }

        return null;
    }

}