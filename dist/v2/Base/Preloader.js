"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
const Widget_1 = require("./Widget");
/**
 * Preloader object
 */
class Preloader extends Widget_1.Widget {
    /**
     * Preloader concstructor
     * @param {PreloaderOptions} opt
     */
    constructor(opt) {
        let options = {};
        if (opt) {
            options = opt;
        }
        options.element = jQuery('<div/>');
        if (!options.class) {
            options.class = [];
        }
        if (!Array.isArray(options.class)) {
            options.class = [options.class];
        }
        options.class = [
            'preloader',
            'flex-column',
            'justify-content-center',
            'align-items-center'
        ].concat(options.class);
        super(options);
        if (options.image) {
            this.setImage(options.image, options.imageTitle);
        }
    }
    /**
     * Set the preloader image
     * @param {string} image
     * @param {string} imageTitle
     */
    setImage(image, imageTitle) {
        this.append(jQuery(`<img class="animation__shake" src="${image}" alt="${imageTitle}" height="60" width="60" />`));
    }
    /**
     * Ready load hide the preloader
     */
    readyLoad() {
        this.hide();
    }
}
exports.Preloader = Preloader;
