"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarMenuItemBadge = void 0;
class SidebarMenuItemBadge {
    _span;
    /**
     * constructor
     * @param sidebarMenuItem
     */
    constructor(sidebarMenuItem) {
        this._span = jQuery('<span class="badge badge-info right" />').appendTo(sidebarMenuItem.getPElement());
    }
    setContent(content) {
        this._span.empty().append(content);
    }
}
exports.SidebarMenuItemBadge = SidebarMenuItemBadge;
