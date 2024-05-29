"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasePage = void 0;
const sweetalert2_1 = __importDefault(require("sweetalert2"));
/**
 * Base page
 */
class BasePage {
    /**
     * page name
     * @protected
     */
    _name = 'base';
    /**
     * Toast
     * @protected
     */
    _toast;
    /**
     * load page fn
     * @protected
     */
    _pageLoader = null;
    /**
     * Constructor
     * @param {BasePageOptions} opt
     */
    constructor(opt) {
        let swalOptions = {
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        };
        if (opt) {
            if (opt.swal) {
                swalOptions = opt.swal;
            }
        }
        this._toast = sweetalert2_1.default.mixin(swalOptions);
    }
    /**
     * getName
     */
    getName() {
        return this._name;
    }
    /**
     * loadContent
     */
    async loadContent() {
        // load content overwrite
    }
    /**
     * unloadContent
     */
    async unloadContent() {
        // unload content overwrite
    }
    /**
     * setPageLoader
     * @param loader
     */
    setPageLoader(loader) {
        this._pageLoader = loader;
    }
}
exports.BasePage = BasePage;
