import {Component, ComponentType} from '../Component.js';
import {SidebarMenu} from './SidebarMenu';
import {SidebarUserPanel} from './SidebarUserPanel';

/**
 * Sidebar
 */
export class Sidebar {

    /**
     * element
     * @private
     */
    protected _element: JQuery;

    /**
     * user panel
     * @private
     */
    protected _userPanel: SidebarUserPanel | null = null;

    /**
     * menu
     * @private
     */
    protected _menu: SidebarMenu | null = null;

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element?: ComponentType) {
        if (element) {
            this._element = Component.getAnyElement(element);
        } else {
            throw Error('sidebar element not found!');
        }
    }

    /**
     * getMenu
     * @return {SidebarMenu}
     */
    public getMenu(): SidebarMenu {
        if (this._menu === null) {
            this._menu = new SidebarMenu(this);
        }

        return this._menu;
    }

    /**
     * getUserPanel
     * @return {SidebarUserPanel}
     */
    public getUserPanel(): SidebarUserPanel {
        if (this._userPanel === null) {
            this._userPanel = new SidebarUserPanel(this);
        }

        return this._userPanel;
    }

    /**
     * getElement
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

}