import { SidebarMenu } from './SidebarMenu';
import { SidebarUserPanel } from './SidebarUserPanel';
/**
 * Sidebar
 */
export declare class Sidebar {
    /**
     * element
     * @private
     */
    private _element;
    /**
     * user panel
     * @private
     */
    private _userPanel;
    /**
     * menu
     * @private
     */
    private _menu;
    /**
     * constructor
     * @param element
     */
    constructor(element?: any);
    /**
     * getMenu
     */
    getMenu(): SidebarMenu;
    /**
     * getUserPanel
     */
    getUserPanel(): SidebarUserPanel;
    /**
     * getElement
     */
    getElement(): any;
}
