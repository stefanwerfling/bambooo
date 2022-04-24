import { Sidebar } from './Sidebar/Sidebar';
import { SidebarLogo } from './Sidebar/SidebarLogo';
export declare class MainSidebar {
    private _element;
    private _logo;
    private _sidebar;
    constructor(element?: any);
    getLogo(): SidebarLogo;
    getSidebar(): Sidebar;
}
