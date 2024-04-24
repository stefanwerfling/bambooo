"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSidebar = void 0;
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
        super(options);
    }
}
exports.MainSidebar = MainSidebar;
