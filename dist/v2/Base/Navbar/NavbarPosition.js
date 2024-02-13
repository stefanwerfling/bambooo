"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavbarPosition = exports.NavbarPositionType = void 0;
const Widget_1 = require("../Widget");
var NavbarPositionType;
(function (NavbarPositionType) {
    NavbarPositionType[NavbarPositionType["left"] = 0] = "left";
    NavbarPositionType[NavbarPositionType["right"] = 1] = "right";
})(NavbarPositionType = exports.NavbarPositionType || (exports.NavbarPositionType = {}));
;
/**
 * Navbar position
 */
class NavbarPosition extends Widget_1.Widget {
    /**
     * Constructor
     * @param {NavbarPositionOptions} opt
     */
    constructor(opt) {
        let options = {};
        if (opt) {
            options = opt;
        }
        options.element = jQuery('<ul/>');
        if (!options.class) {
            options.class = [];
        }
        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }
        options.class = [
            'navbar-nav'
        ].concat(options.class);
        if (opt?.postionType && opt.postionType === NavbarPositionType.right) {
            options.class = [
                'ml-auto'
            ].concat(options.class);
        }
        super(options);
    }
}
exports.NavbarPosition = NavbarPosition;
