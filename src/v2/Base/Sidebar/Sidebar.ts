import {Widget, WidgetOptions} from '../Widget';
import {SidebarMenu} from './SidebarMenu';
import {SidebarUserPanel} from './SidebarUserPanel';

/**
 * Sidebar options
 */
export type SidebarOptions = WidgetOptions & {
    menu?: SidebarMenu;
    userpanel?: SidebarUserPanel;
};

/**
 * Sidebar
 */
export class Sidebar extends Widget {

    /**
     * Constructor
     * @param {SidebarOptions} opt
     */
    public constructor(opt?: SidebarOptions) {
        let options: SidebarOptions = {};

        if (opt) {
            options = opt;
        }

        options.element = jQuery('<div/>');

        if (!options.class) {
            options.class = [];
        }

        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }

        options.class = [
            'sidebar',
        ].concat(options.class);

        let childrens = options.children;

        if (!childrens) {
            childrens = [];
        }

        if (!options.userpanel) {
            options.userpanel = new SidebarUserPanel();
        }

        childrens.push(options.userpanel);

        if (!options.menu) {
            options.menu = new SidebarMenu();
        }

        childrens.push(options.menu);

        super(options);
    }

    /**
     * Return user panel object
     * @returns {SidebarUserPanel|null}
     */
    public getUserPanel(): SidebarUserPanel|null {
        for (const children of this.getChildren()) {
            if (children instanceof SidebarUserPanel) {
                return children;
            }
        }

        return null;
    }

    /**
     * Return sidebar menu object
     * @returns {SidebarMenu|null}
     */
    public getMenu(): SidebarMenu|null {
        for (const children of this.getChildren()) {
            if (children instanceof SidebarMenu) {
                return children;
            }
        }

        return null;
    }

}