import { ComponentType } from '../Component.js';
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
    protected _element: JQuery;
    /**
     * user panel
     * @private
     */
    protected _userPanel: SidebarUserPanel | null;
    /**
     * menu
     * @private
     */
    protected _menu: SidebarMenu | null;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element?: ComponentType);
    /**
     * getMenu
     * @return {SidebarMenu}
     */
    getMenu(): SidebarMenu;
    /**
     * getUserPanel
     * @return {SidebarUserPanel}
     */
    getUserPanel(): SidebarUserPanel;
    /**
     * getElement
     * @return {JQuery}
     */
    getElement(): JQuery;
}
