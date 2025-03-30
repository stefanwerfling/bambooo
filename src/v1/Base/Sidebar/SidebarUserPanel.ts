import {Sidebar} from './Sidebar';

/**
 * SidebarUserPanelClickFn
 */
export type SidebarUserPanelClickFn = () => void;

/**
 * SidebarUserPanel
 */
export class SidebarUserPanel {

    /**
     * div element
     * @private
     */
    private _divElement: any;

    /**
     * image
     * @private
     */
    private _image: string = '';

    /**
     * username
     * @private
     */
    private _username: string = '';

    /**
     * constructor
     * @param sidebar
     */
    public constructor(sidebar: Sidebar) {
        this._divElement = jQuery('<div class="user-panel mt-3 pb-3 mb-3 d-flex" />').prependTo(sidebar.getElement());
    }

    /**
     * setImage
     * @param url
     */
    public setImage(url: string): void {
        this._image = url;
        this.render();
    }

    /**
     * setUsername
     * @param username
     */
    public setUsername(username: string): void {
        this._username = username;
        this.render();
    }

    /**
     * render
     */
    public render(): void {
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
    public setOnClickFn(onClick: SidebarUserPanelClickFn): void {
        this._divElement.unbind().on('click', (): void => {
            onClick();
        });
    }
}