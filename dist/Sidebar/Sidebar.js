"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sidebar = void 0;
const SidebarMenu_1 = require("./SidebarMenu");
const SidebarUserPanel_1 = require("./SidebarUserPanel");
/**
 * Sidebar
 */
class Sidebar {
    /**
     * element
     * @private
     */
    _element;
    /**
     * user panel
     * @private
     */
    _userPanel = null;
    /**
     * menu
     * @private
     */
    _menu = null;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            throw Error('sidebar element not found!');
        }
    }
    /**
     * getMenu
     */
    getMenu() {
        if (this._menu === null) {
            this._menu = new SidebarMenu_1.SidebarMenu(this);
        }
        return this._menu;
    }
    /**
     * getUserPanel
     */
    getUserPanel() {
        if (this._userPanel === null) {
            this._userPanel = new SidebarUserPanel_1.SidebarUserPanel(this);
        }
        return this._userPanel;
    }
    /**
     * getElement
     */
    getElement() {
        return this._element;
    }
}
exports.Sidebar = Sidebar;
