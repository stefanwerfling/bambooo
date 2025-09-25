"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preloader = void 0;
/**
 * Preloader
 */
class Preloader {
    /**
     * element
     * @private
     */
    _element;
    /**
     * title
     * @private
     */
    _title = '';
    /**
     * imgeurl
     * @private
     */
    _imageUrl = '';
    /**
     * Constructor
     * @param {JQuery} element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.preloader');
        }
    }
    /**
     * getElement
     * @return {JQuery}
     */
    getElement() {
        return this._element;
    }
    /**
     * setImage
     * @param url
     */
    setImage(url) {
        this._imageUrl = url;
        this._element.empty().append(jQuery(`<img class="animation__shake" src="${this._imageUrl}" alt="${this._title}" height="60" width="60" />`));
    }
    /**
     * setTitle
     * @param title
     */
    setTitle(title) {
        this._title = title;
    }
    /**
     * readyLoad
     */
    readyLoad() {
        this._element.css({
            display: 'none'
        });
    }
}
exports.Preloader = Preloader;
