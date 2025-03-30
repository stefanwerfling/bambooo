import {Element} from './../../Element.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * H Head element
 */
export class HeadText extends Element {

    /**
     * constructor
     * @param {any|Element} element
     * @param {number} hnum
     * @param {string|LangText} title
     */
    public constructor(element: any|Element, hnum: number, title: string|LangText = '') {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<h${hnum}/>`).appendTo(telement);

        this.setTitle(title);
    }

    /**
     * Set title
     * @param {string|JQuery<HTMLElement>|LangText} title
     */
    public setTitle(title: string|JQuery<HTMLElement>|LangText): void {
        const ttitle = this._getAnyElement(title);

        this._element.empty().append(ttitle);
    }
}