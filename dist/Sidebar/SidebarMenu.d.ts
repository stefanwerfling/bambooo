import { Sidebar } from './Sidebar';
import { SidebarMenuItem } from './SidebarMenuItem';
export declare class SidebarMenu {
    private _navElement;
    private _ulElement;
    private _items;
    constructor(sidebar: Sidebar);
    getNavElement(): any;
    getUlElement(): any;
    addMenuItem(menuItem: SidebarMenuItem): void;
    getMenuItem(name: string): SidebarMenuItem | null;
}
