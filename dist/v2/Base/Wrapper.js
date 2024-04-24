"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const MainSidebar_1 = require("./MainSidebar");
const Navbar_1 = require("./Navbar/Navbar");
const Preloader_1 = require("./Preloader");
const Widget_1 = require("./Widget");
/**
 * Wrapper object for AdminLTE
 */
class Wrapper extends Widget_1.Widget {
    /**
     * Constructor
     * @param {WrapperOptions} opt
     */
    constructor(opt) {
        if (!opt.element) {
            opt.element = jQuery('.wrapper');
        }
        if (opt.element.length === 0) {
            throw Error('Wrapper element not found!');
        }
        opt.emptyElement = true;
        let childrens = opt.children;
        if (!childrens) {
            childrens = [];
        }
        let preloader = opt.preloader;
        if (!preloader) {
            preloader = new Preloader_1.Preloader();
        }
        let navbar = opt.navbar;
        if (!navbar) {
            navbar = new Navbar_1.Navbar();
        }
        let mainsidebar = opt.mainsidebar;
        if (!mainsidebar) {
            mainsidebar = new MainSidebar_1.MainSidebar();
        }
        childrens = [preloader, navbar, mainsidebar, ...childrens];
        opt.children = childrens;
        super(opt);
    }
    /**
     * Return a preloader
     * @returns {Preloader|null}
     */
    getPreloader() {
        for (const child of this._children) {
            if (child instanceof Preloader_1.Preloader) {
                return child;
            }
        }
        return null;
    }
    /**
     * Return a navbar
     * @returns {Navbar|null}
     */
    getNavbar() {
        for (const child of this._children) {
            if (child instanceof Navbar_1.Navbar) {
                return child;
            }
        }
        return null;
    }
    /**
     * Return the main Sidebar
     * @returns {MainSidebar|null}
     */
    getMainSidebar() {
        for (const child of this._children) {
            if (child instanceof MainSidebar_1.MainSidebar) {
                return child;
            }
        }
        return null;
    }
}
exports.Wrapper = Wrapper;
