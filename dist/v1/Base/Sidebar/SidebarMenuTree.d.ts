import { SidebarMenuItem } from './SidebarMenuItem';
/**
 * SidebarMenuTree
 */
export declare class SidebarMenuTree {
    /**
     * Ul element
     * @protected
     */
    protected _ulElement: JQuery;
    /**
     * Items
     * @protected
     */
    protected _items: SidebarMenuItem[];
    /**
     * Constructor
     * @param {SidebarMenuItem} sidebarMenuItem
     */
    constructor(sidebarMenuItem: SidebarMenuItem);
    /**
     * Get ul element
     * @return {JQuery}
     */
    getUlElement(): JQuery;
    /**
     * Add menu item
     * @param {SidebarMenuItem} menuItem
     */
    addMenuItem(menuItem: SidebarMenuItem): void;
    /**
     * Return menu item by name
     * @param {SidebarMenuItem|null} name
     */
    getMenuItem(name: string): SidebarMenuItem | null;
}
