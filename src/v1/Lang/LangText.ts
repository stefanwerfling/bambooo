import {Element} from '../Element';

/**
 * LangText
 */
export class LangText extends Element {

    /**
     * constructor
     * @param text
     */
    public constructor(text: string) {
        super();

        this._element = jQuery('<span />');
        this._element.attr('lang', '1');
        this._element.attr('lang-value', text);
        this._element.append(text);
    }

    /**
     * addLangText
     * @param element
     * @param atext
     */
    public static addLangText(element: any, atext: LangText|string): void {
        const telement = Element.getAnyElement(element);

        if (atext instanceof LangText) {
            telement.empty().append(atext.getElement());
        } else {
            telement.empty().append(atext);
        }
    }
}