import {Component, ComponentType} from '../Component.js';

/**
 * LeftNavbar
 */
export class LeftNavbar {

    /**
     * entries
     * @private
     */
    private _entries = [
        {
            title: 'Home',
            link: '/index.html'
        }
    ];

    /**
     * element
     * @private
     */
    protected _element: JQuery;

    /**
     * Constructor
     * @param element
     */
    public constructor(element?: ComponentType) {
        if (element) {
            this._element = jQuery('<ul class="navbar-nav" />').appendTo(Component.getAnyElement(element));
        } else {
            throw Error('left navbar element not found!');
        }
    }

    /**
     * Get element
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

    /**
     * load
     */
    public load(): void {
        for (const entry of this._entries) {
            jQuery('#ccc_navbar').append(
                `<li class="nav-item d-none d-sm-inline-block">
                  <a href="${entry.link}" class="nav-link">${entry.title}</a>
                </li>`
            );
        }
    }

}