import {Sidebar} from './Sidebar/Sidebar';
import {SidebarLogo} from './Sidebar/SidebarLogo';
import {Widget, WidgetOptions} from './Widget';

/**
 * main sidebar options
 */
export type MainSidebarOptions = WidgetOptions & {
    logo?: SidebarLogo;
    sidebar?: Sidebar;
}

/**
 * Main Sidebar
 */
export class MainSidebar extends Widget {

    /**
     * Constructor
     * @param {MainSidebarOptions} opt
     */
    public constructor(opt?: MainSidebarOptions) {
        let options:MainSidebarOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<aside/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'main-sidebar',
            'sidebar-dark-primary',
            'elevation-4',
        ].concat(options.class);

        let childrens = options.children;

        if (!childrens) {
            childrens = [];
        }

        if (options.logo) {
            childrens.push(options.logo);
        }

        if (options.sidebar) {
            childrens.push(options.sidebar);
        }

        super(options);
    }

    /**
     * Return the Sidebar logo object
     * @returns {SidebarLogo}
     */
    public getLogo(): SidebarLogo {
        for (const child of this._children) {
            if (child instanceof SidebarLogo) {
                return child;
            }
        }

        const logo = new SidebarLogo();

        this._children.push(logo);
        this.append(logo);

        return logo;
    }

}