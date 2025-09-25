import { SidebarMenuItem } from './SidebarMenuItem';
/**
 * Sidebar menu item badge
 */
export declare class SidebarMenuItemBadge {
    /**
     * Span
     * @protected
     */
    protected _span: JQuery;
    /**
     * constructor
     * @param sidebarMenuItem
     */
    constructor(sidebarMenuItem: SidebarMenuItem);
    /**
     * Set content
     * @param {string|JQuery} content
     */
    setContent(content: string | JQuery): void;
}
