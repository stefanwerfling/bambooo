import {Element} from './../../Element.js';
import {LangText} from './../../../Lang/LangText.js';

/**
 * StrongText
 */
export class StrongText extends Element {

    /**
     * constructor
     * @param {any|Element} element
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    public constructor(element: any|Element, text?: string|JQuery<HTMLElement>|LangText) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery(`<strong/>`).appendTo(telement);

        if (text) {
            this.addText(text);
        }
    }

    /**
     * Add Text
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    public addText(text: string|JQuery<HTMLElement>|LangText): void {
        const ttext = this._getAnyElement(text);
        this._element.append(ttext);
    }

}