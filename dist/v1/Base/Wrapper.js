"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wrapper = void 0;
const ContentWrapper_1 = require("./ContentWrapper");
const ControlSidebar_1 = require("./ControlSidebar");
const Footer_1 = require("./Footer");
const MainSidebar_1 = require("./MainSidebar");
const Navbar_1 = require("./Navbar");
const Preloader_1 = require("./Preloader");
/**
 * Wrapper
 */
class Wrapper {
    /**
     * element
     * @private
     */
    _element;
    /**
     * preloader
     * @private
     */
    _preloader;
    /**
     * navbar
     * @private
     */
    _navbar;
    /**
     * main sidebar
     * @private
     */
    _mainSidebar;
    /**
     * content wrapper
     * @private
     */
    _contentWrapper;
    /**
     * footer
     * @private
     */
    _footer;
    /**
     * control sidebar
     * @private
     */
    _controlSidebar;
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.wrapper');
        }
        if (this._element.length === 0) {
            throw Error('wrapper element not found!');
        }
        this._element.empty();
        const p = jQuery('<div class="preloader flex-column justify-content-center align-items-center" />').appendTo(this._element);
        this._preloader = new Preloader_1.Preloader(p);
        const n = jQuery('<nav class="main-header navbar navbar-expand navbar-white navbar-light" />').appendTo(this._element);
        this._navbar = new Navbar_1.Navbar(n);
        const ms = jQuery('<aside class="main-sidebar sidebar-dark-primary elevation-4" />').appendTo(this._element);
        this._mainSidebar = new MainSidebar_1.MainSidebar(ms);
        const c = jQuery('<div class="content-wrapper" />').appendTo(this._element);
        this._contentWrapper = new ContentWrapper_1.ContentWrapper(c);
        const f = jQuery('<footer class="main-footer" />').appendTo(this._element);
        this._footer = new Footer_1.Footer(f);
        const cs = jQuery('<aside class="control-sidebar control-sidebar-dark" />').appendTo(this._element);
        this._controlSidebar = new ControlSidebar_1.ControlSidebar(cs);
    }
    /**
     * getElement
     * @return {JQuery}
     */
    getElement() {
        return this._element;
    }
    /**
     * getMainSidebar
     */
    getMainSidebar() {
        return this._mainSidebar;
    }
    /**
     * getContentWrapper
     */
    getContentWrapper() {
        return this._contentWrapper;
    }
    /**
     * getFooter
     */
    getFooter() {
        return this._footer;
    }
    /**
     * getCrontrolSidebar
     */
    getCrontrolSidebar() {
        return this._controlSidebar;
    }
    /**
     * getPreloader
     */
    getPreloader() {
        return this._preloader;
    }
    /**
     * getNavbar
     */
    getNavbar() {
        return this._navbar;
    }
}
exports.Wrapper = Wrapper;
