"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainSidebar = void 0;
const Sidebar_1 = require("./Sidebar/Sidebar");
const SidebarLogo_1 = require("./Sidebar/SidebarLogo");
/**
 * MainSidebar
 */
class MainSidebar {
    /**
     * element
     * @private
     */
    _element;
    /**
     * logo
     * @private
     */
    _logo;
    /**
     * sidebar
     * @private
     */
    _sidebar;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.main-sidebar');
        }
        if (this._element.length === 0) {
            throw Error('main sidebar element not found!');
        }
        const l = jQuery('<a href="#" class="brand-link"/>').appendTo(this._element);
        this._logo = new SidebarLogo_1.SidebarLogo(l);
        const s = jQuery('<div class="sidebar" />').appendTo(this._element);
        this._sidebar = new Sidebar_1.Sidebar(s);
    }
    /**
     * getLogo
     */
    getLogo() {
        return this._logo;
    }
    /**
     * getSidebar
     */
    getSidebar() {
        return this._sidebar;
    }
}
exports.MainSidebar = MainSidebar;
