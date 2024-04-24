import { Sidebar } from './Sidebar/Sidebar';
import { SidebarLogo } from './Sidebar/SidebarLogo';
import { Widget, WidgetOptions } from './Widget';
export type MainSidebarOptions = WidgetOptions & {
    logo?: SidebarLogo;
    sidebar?: Sidebar;
};
/**
 * Main Sidebar
 */
export declare class MainSidebar extends Widget {
    /**
     * Constructor
     * @param {MainSidebarOptions} opt
     */
    constructor(opt?: MainSidebarOptions);
}
