import {Sidebar} from './Sidebar/Sidebar';
import {SidebarLogo} from './Sidebar/SidebarLogo';

/**
 * MainSidebar
 */
export class MainSidebar {

    /**
     * element
     * @private
     */
    private _element: any;

    /**
     * logo
     * @private
     */
    private _logo: SidebarLogo;

    /**
     * sidebar
     * @private
     */
    private _sidebar: Sidebar;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.main-sidebar');
        }

        if (this._element.length === 0) {
            throw Error('main sidebar element not found!');
        }

        const l = jQuery('<a href="#" class="brand-link"/>').appendTo(this._element);
        this._logo = new SidebarLogo(l);

        const s = jQuery('<div class="sidebar" />').appendTo(this._element);
        this._sidebar = new Sidebar(s);
    }

    /**
     * getLogo
     */
    public getLogo(): SidebarLogo {
        return this._logo;
    }

    /**
     * getSidebar
     */
    public getSidebar(): Sidebar {
        return this._sidebar;
    }

}