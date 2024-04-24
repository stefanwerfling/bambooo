"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLogo = void 0;
const Widget_1 = require("../Widget");
class SidebarLogo extends Widget_1.Widget {
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
    }
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
}
exports.SidebarLogo = SidebarLogo;
