"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuItemBadge = void 0;
/**
 * Sidebar menu item badge
 */
class SidebarMenuItemBadge {
    /**
     * Span
     * @protected
     */
    _span;
    /**
     * constructor
     * @param sidebarMenuItem
     */
    constructor(sidebarMenuItem) {
        this._span = jQuery('<span class="badge badge-info right" />').appendTo(sidebarMenuItem.getPElement());
    }
    /**
     * Set content
     * @param {string|JQuery} content
     */
    setContent(content) {
        this._span.empty().append(content);
    }
}
exports.SidebarMenuItemBadge = SidebarMenuItemBadge;
