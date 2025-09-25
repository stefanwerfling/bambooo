import {SidebarMenuItem} from './SidebarMenuItem';

/**
 * Sidebar menu item badge
 */
export class SidebarMenuItemBadge {

    /**
     * Span
     * @protected
     */
    protected _span: JQuery;

    /**
     * constructor
     * @param sidebarMenuItem
     */
    public constructor(sidebarMenuItem: SidebarMenuItem) {
        this._span = jQuery('<span class="badge badge-info right" />').appendTo(sidebarMenuItem.getPElement());
    }

    /**
     * Set content
     * @param {string|JQuery} content
     */
    public setContent(content: string|JQuery): void {
        this._span.empty().append(content);
    }

}