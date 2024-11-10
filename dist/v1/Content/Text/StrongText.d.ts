import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * StrongText
 */
export declare class StrongText extends Element {
    /**
     * constructor
     * @param {any|Element} element
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    constructor(element: any | Element, text?: string | JQuery<HTMLElement> | LangText);
    /**
     * Add Text
     * @param {string|JQuery<HTMLElement>|LangText} text
     */
    addText(text: string | JQuery<HTMLElement> | LangText): void;
}
