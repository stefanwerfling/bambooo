"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const Component_js_1 = require("./Component.js");
const LeftNavbar_1 = require("./Navbar/LeftNavbar");
const RightNavbar_1 = require("./Navbar/RightNavbar");
/**
 * Navbar
 */
class Navbar extends Component_js_1.Component {
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
     * Constructor
     * @param {ComponentType} element
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
