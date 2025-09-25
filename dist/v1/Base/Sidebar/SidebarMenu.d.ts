import { Sidebar } from './Sidebar';
import { SidebarMenuItem } from './SidebarMenuItem';
export declare class SidebarMenu {
    /**
     * Nav element
     * @protected
     */
    protected _navElement: JQuery;
    /**
     * ul element
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
     * @param {Sidebar} sidebar
     */
    constructor(sidebar: Sidebar);
    /**
     * Get nav element
     * @return {JQuery}
     */
    getNavElement(): JQuery;
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
     * Get menu item by name
     * @param {string} name
     * @return {SidebarMenuItem|null}
     */
    getMenuItem(name: string): SidebarMenuItem | null;
    /**
     * initTreeview
     */
    initTreeview(): void;
}
