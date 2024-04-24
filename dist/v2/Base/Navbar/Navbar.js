"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const Widget_1 = require("../Widget");
const NavbarPosition_1 = require("./NavbarPosition");
/**
 * Navbar object
 */
class Navbar extends Widget_1.Widget {
    /**
     * Navbar left
     * @protected
     */
    _left;
    /**
     * Navbar right
     * @protected
     */
    _right = null;
    /**
     * Constructor
     * @param {NavbarOptions} opt
     */
    constructor(opt) {
        let options = {};
        if (opt) {
            options = opt;
        }
        options.element = jQuery('<nav/>');
        if (!options.class) {
            options.class = [];
        }
        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }
        options.class = [
            'main-header',
            'navbar',
            'navbar-expand',
            'navbar-white',
            'navbar-light'
        ].concat(options.class);
        let left = options.left;
        if (!left) {
            left = new NavbarPosition_1.NavbarPosition({
                postionType: NavbarPosition_1.NavbarPositionType.left
            });
        }
        let children = [];
        if (options.children) {
            children = options.children;
        }
        const baseChildren = [left];
        children = baseChildren.concat(children);
        options.children = children;
        super(options);
        this._left = left;
    }
    /**
     * Return right Navbar
     * @returns {NavbarPosition|null}
     */
    getRightNavbar() {
        return this._right;
    }
}
exports.Navbar = Navbar;
