import {Icon, IconFa} from '../Content/Icon/Icon.js';
import {LangText} from '../../Lang/LangText.js';
import {LeftNavbar} from './LeftNavbar.js';

/**
 * Link Function call
 */
export type LeftNavbarLinkFn = (event: any) => void;

/**
 * LeftNavbarLink
 */
export class LeftNavbarLink {

    /**
     * list element
     * @private
     */
    private _liElement: any;

    /**
     * link element
     * @private
     */
    private _aElement: any;

    /**
     * constructor
     * @param {LeftNavbar} leftNavbar
     * @param {string|LangText} title
     * @param {LeftNavbarLinkFn|null} onClickFn
     * @param {string} linkClass
     * @param {IconFa|string|null} icon
     */
    public constructor(leftNavbar: LeftNavbar, title: string|LangText, onClickFn?: LeftNavbarLinkFn|null, linkClass: string = '', icon: IconFa|string|null = null) {
        this._liElement = jQuery('<li class="nav-item d-none d-sm-inline-block" />').appendTo(leftNavbar.getElement());
        this._aElement = jQuery(`<a href="#" class="nav-link ${linkClass}"></a>`).appendTo(this._liElement);

        if (icon !== null) {
            new Icon(this._aElement, icon);

            this._aElement.append('&nbsp;');
        }

        const textDiv = jQuery('<span></span>').appendTo(this._aElement);

        LangText.addLangText(textDiv, title);

        if (onClickFn) {
            this._aElement.on('click', onClickFn);
        } else if (onClickFn !== null) {
            this._aElement.on('click', () => {
                return false;
            });
        }
    }

    /**
     * getLiElement
     * @return {any}
     */
    public getLiElement(): any {
        return this._liElement;
    }

    /**
     * getAElement
     * @return {any}
     */
    public getAElement(): any {
        return this._aElement;
    }

}