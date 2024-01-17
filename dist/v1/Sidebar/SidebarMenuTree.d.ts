import { SidebarMenuItem } from './SidebarMenuItem';
/**
 * SidebarMenuTree
 */
export declare class SidebarMenuTree {
    private _ulElement;
    private _items;
    /**
     * constructor
     * @param sidebarMenuItem
     */
    constructor(sidebarMenuItem: SidebarMenuItem);
    getUlElement(): any;
    addMenuItem(menuItem: SidebarMenuItem): void;
    getMenuItem(name: string): SidebarMenuItem | null;
}
