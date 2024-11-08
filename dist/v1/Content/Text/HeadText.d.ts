import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * H Head element
 */
export declare class HeadText extends Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {number} hnum
     * @param {string|LangText} title
     */
    constructor(element: any | Element, hnum: number, title?: string | LangText);
    /**
     * Set title
     * @param {string|JQuery<HTMLElement>|LangText} title
     */
    setTitle(title: string | JQuery<HTMLElement> | LangText): void;
}
