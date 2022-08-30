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
    private _element: any;

    /**
     * user panel
     * @private
     */
    private _userPanel: SidebarUserPanel | null = null;

    /**
     * menu
     * @private
     */
    private _menu: SidebarMenu | null = null;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        if (element) {
            this._element = element;
        } else {
            throw Error('sidebar element not found!');
        }
    }

    /**
     * getMenu
     */
    public getMenu(): SidebarMenu {
        if (this._menu === null) {
            this._menu = new SidebarMenu(this);
        }

        return this._menu;
    }

    /**
     * getUserPanel
     */
    public getUserPanel(): SidebarUserPanel {
        if (this._userPanel === null) {
            this._userPanel = new SidebarUserPanel(this);
        }

        return this._userPanel;
    }

    /**
     * getElement
     */
    public getElement(): any {
        return this._element;
    }

}