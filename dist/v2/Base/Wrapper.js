"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
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
        childrens = [preloader, navbar, ...childrens];
        opt.children = childrens;
        super(opt);
    }
}
exports.Wrapper = Wrapper;
