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
    protected _element: JQuery;
    /**
     * logo
     * @private
     */
    protected _logo: SidebarLogo;
    /**
     * sidebar
     * @private
     */
    protected _sidebar: Sidebar;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element?: JQuery);
    /**
     * getLogo
     */
    getLogo(): SidebarLogo;
    /**
     * getSidebar
     */
    getSidebar(): Sidebar;
}
