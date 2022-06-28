define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SidebarMenuItemBadge {
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
});
//# sourceMappingURL=SidebarMenuItemBadge.js.map