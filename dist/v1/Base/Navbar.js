"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const Element_1 = require("./Element");
const LeftNavbar_1 = require("./Navbar/LeftNavbar");
const RightNavbar_1 = require("./Navbar/RightNavbar");
/**
 * Navbar
 */
class Navbar extends Element_1.Element {
    /**
     * left navbar
     * @private
     */
    _leftNavbar;
    /**
     * right navbar
     * @private
     */
    _rightNavbar = null;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        if (telement) {
            this._element = telement;
        }
        else {
            throw Error('navbar element not found!');
        }
        this._leftNavbar = new LeftNavbar_1.LeftNavbar(this._element);
    }
    /**
     * getLeftNavbar
     */
    getLeftNavbar() {
        return this._leftNavbar;
    }
    /**
     * getRightNavbar
     */
    getRightNavbar() {
        if (this._rightNavbar === null) {
            this._rightNavbar = new RightNavbar_1.RightNavbar(this._element);
        }
        return this._rightNavbar;
    }
}
exports.Navbar = Navbar;
