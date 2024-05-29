import { Widget, WidgetOptions } from '../Widget';
import { SidebarMenu } from './SidebarMenu';
import { SidebarUserPanel } from './SidebarUserPanel';
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
export declare class Sidebar extends Widget {
    /**
     * Constructor
     * @param {SidebarOptions} opt
     */
    constructor(opt?: SidebarOptions);
    /**
     * Return user panel object
     * @returns {SidebarUserPanel|null}
     */
    getUserPanel(): SidebarUserPanel | null;
    /**
     * Return sidebar menu object
     * @returns {SidebarMenu|null}
     */
    getMenu(): SidebarMenu | null;
}
