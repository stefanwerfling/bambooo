"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarUserPanel = void 0;
/**
 * SidebarUserPanel
 */
class SidebarUserPanel {
    /**
     * div element
     * @private
     */
    _divElement;
    /**
     * image
     * @private
     */
    _image = '';
    /**
     * username
     * @private
     */
    _username = '';
    /**
     * constructor
     * @param sidebar
     */
    constructor(sidebar) {
        this._divElement = jQuery('<div class="user-panel mt-3 pb-3 mb-3 d-flex" />').prependTo(sidebar.getElement());
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
     * setUsername
     * @param username
     */
    setUsername(username) {
        this._username = username;
        this.render();
    }
    /**
     * render
     */
    render() {
        this._divElement.empty();
        if (this._image !== '') {
            this._divElement.append(`<div class="image"><img src="${this._image}" class="img-circle elevation-2" alt="User Image"></div>`);
        }
        this._divElement.append(`<div class="info"><a href="#" class="d-block">${this._username}</a></div>`);
        const oscontent = this._divElement.parent().find('.os-content');
        if (oscontent.length > 0) {
            this._divElement.detach().appendTo(oscontent);
        }
    }
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick) {
        this._divElement.unbind().on('click', () => {
            onClick();
        });
    }
}
exports.SidebarUserPanel = SidebarUserPanel;
