"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSidebar = void 0;
const SidebarLogo_1 = require("./Sidebar/SidebarLogo");
const Widget_1 = require("./Widget");
/**
 * Main Sidebar
 */
class MainSidebar extends Widget_1.Widget {
    /**
     * Constructor
     * @param {MainSidebarOptions} opt
     */
    constructor(opt) {
        let options = {};
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
    getLogo() {
        for (const child of this._children) {
            if (child instanceof SidebarLogo_1.SidebarLogo) {
                return child;
            }
        }
        const logo = new SidebarLogo_1.SidebarLogo();
        this._children.push(logo);
        this.append(logo);
        return logo;
    }
}
exports.MainSidebar = MainSidebar;
