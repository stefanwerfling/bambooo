import {Component, ComponentType} from '../Component.js';

/**
 * SidebarLogo
 */
export class SidebarLogo {

    /**
     * element
     * @private
     */
    protected _element: JQuery;

    /**
     * image url
     * @private
     */
    protected _image: string = '';

    /**
     * title
     * @private
     */
    protected _title: string = '';

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element?: ComponentType) {
        if (element) {
            this._element = Component.getAnyElement(element);
        } else {
            throw Error('sidebar logo element not found!');
        }
    }

    /**
     * getElement
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

    /**
     * setImage
     * @param {string} url
     */
    public setImage(url: string): void {
        this._image = url;
        this.render();
    }

    /**
     * setTitle
     * @param {string} title
     */
    public setTitle(title: string): void {
        this._title = title;
        this.render();
    }

    /**
     * render
     */
    public render(): void {
        this._element.empty();
        this._element.append(`<img src="${this._image}" alt="${this._title}" class="brand-image img-circle elevation-3" style="opacity: .8">`)
        this._element.append(`<span class="brand-text font-weight-light">${this._title}</span>`);
    }

}