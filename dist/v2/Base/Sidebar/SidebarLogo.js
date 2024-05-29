"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLogo = void 0;
const Widget_1 = require("../Widget");
/**
 * Sidebar logo
 */
class SidebarLogo extends Widget_1.Widget {
    /**
     * Constructor
     * @param {SidebarLogoOptions} opt
     */
    constructor(opt) {
        let options = {};
        if (opt) {
            options = opt;
        }
        options.element = jQuery('<a href="#"/>');
        if (!options.class) {
            options.class = [];
        }
        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }
        options.class = [
            'brand-link'
        ].concat(options.class);
        super(options);
        if (options.image) {
            this._element.append(this._createChildImage(options.image));
        }
        if (options.title) {
            this._element.append(this._createChildTitle(options.title));
        }
    }
    /**
     * create a child image object
     * @param {SidebarLogoOptionImage} option
     * @protected
     */
    _createChildImage(option) {
        const img = jQuery('<img>');
        img.attr('src', option.src);
        if (option.alt) {
            img.attr('alt', option.alt);
        }
        img.addClass('brand-image img-circle elevation-3');
        if (option.class) {
            for (const aClass of option.class) {
                img.addClass(aClass);
            }
        }
        if (option.style) {
            img.css(option.style);
        }
        else {
            img.css({
                'opacity': '.8'
            });
        }
        return img;
    }
    /**
     * create the child title object
     * @param {SidebarLogoOptionTitle} option
     * @returns {JQuery}
     * @protected
     */
    _createChildTitle(option) {
        const span = jQuery('<span class="brand-text font-weight-light" />');
        span.append(`${option.text}`);
        if (option.class) {
            for (const aClass of option.class) {
                span.addClass(aClass);
            }
        }
        return span;
    }
}
exports.SidebarLogo = SidebarLogo;
