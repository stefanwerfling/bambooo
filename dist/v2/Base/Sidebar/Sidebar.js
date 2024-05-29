"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const Widget_1 = require("../Widget");
const SidebarMenu_1 = require("./SidebarMenu");
const SidebarUserPanel_1 = require("./SidebarUserPanel");
/**
 * Sidebar
 */
class Sidebar extends Widget_1.Widget {
    /**
     * Constructor
     * @param {SidebarOptions} opt
     */
    constructor(opt) {
        let options = {};
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
            options.userpanel = new SidebarUserPanel_1.SidebarUserPanel();
        }
        childrens.push(options.userpanel);
        if (!options.menu) {
            options.menu = new SidebarMenu_1.SidebarMenu();
        }
        childrens.push(options.menu);
        super(options);
    }
    /**
     * Return user panel object
     * @returns {SidebarUserPanel|null}
     */
    getUserPanel() {
        for (const children of this.getChildren()) {
            if (children instanceof SidebarUserPanel_1.SidebarUserPanel) {
                return children;
            }
        }
        return null;
    }
    /**
     * Return sidebar menu object
     * @returns {SidebarMenu|null}
     */
    getMenu() {
        for (const children of this.getChildren()) {
            if (children instanceof SidebarMenu_1.SidebarMenu) {
                return children;
            }
        }
        return null;
    }
}
exports.Sidebar = Sidebar;
