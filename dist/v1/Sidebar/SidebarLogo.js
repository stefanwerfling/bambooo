"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarLogo = void 0;
/**
 * SidebarLogo
 */
class SidebarLogo {
    /**
     * element
     * @private
     */
    _element;
    /**
     * image url
     * @private
     */
    _image = '';
    /**
     * title
     * @private
     */
    _title = '';
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            throw Error('sidebar logo element not found!');
        }
    }
    /**
     * getElement
     */
    getElement() {
        return this._element;
    }
    /**
     * setImage
     * @param url
     */
    setImage(url) {
        this._image = url;
        this.render();
    }
    /**
     * setTitle
     * @param title
     */
    setTitle(title) {
        this._title = title;
        this.render();
    }
    /**
     * render
     */
    render() {
        this._element.empty();
        this._element.append(`<img src="${this._image}" alt="${this._title}" class="brand-image img-circle elevation-3" style="opacity: .8">`);
        this._element.append(`<span class="brand-text font-weight-light">${this._title}</span>`);
    }
}
exports.SidebarLogo = SidebarLogo;
