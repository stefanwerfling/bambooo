import { Sidebar } from './Sidebar/Sidebar';
import { SidebarLogo } from './Sidebar/SidebarLogo';
/**
 * MainSidebar
 */
export declare class MainSidebar {
    /**
     * element
     * @private
     */
    private _element;
    /**
     * logo
     * @private
     */
    private _logo;
    /**
     * sidebar
     * @private
     */
    private _sidebar;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getLogo
     */
    getLogo(): SidebarLogo;
    /**
     * getSidebar
     */
    getSidebar(): Sidebar;
}
