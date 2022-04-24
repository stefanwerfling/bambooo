import { SidebarMenu } from './SidebarMenu';
import { SidebarUserPanel } from './SidebarUserPanel';
export declare class Sidebar {
    private _element;
    private _userPanel;
    private _menu;
    constructor(element?: any);
    getMenu(): SidebarMenu;
    getUserPanel(): SidebarUserPanel;
    getElement(): any;
}
