import {Element} from '../Base/Element.js';

/**
 * LangTextDefaultClickFn
 */
// eslint-disable-next-line no-use-before-define
export type LangTextDefaultClickFn = (langText: LangText) => void;

/**
 * LangText
 */
export class LangText extends Element {

    /**
     * class
     * @protected
     */
    protected _class: string = '';

    /**
     * constructor
     * @param {string} text
     * @param {[string]} cssClass
     * @param {[LangTextDefaultClickFn]} onClick
     */
    public constructor(
        text: string,
        cssClass?: string,
        onClick?: LangTextDefaultClickFn
    ) {
        super();

        this._element = jQuery('<span />');
        this._element.attr('lang', '1');
        this._element.attr('lang-value', text);
        this._element.append(text);

        if (cssClass) {
            this.setClass(cssClass);
        }

        if (onClick) {
            this.setOnClickFn(onClick);
        }
    }

    /**
     * addLangText
     * @param {any} element
     * @param {LangText|string} atext
     */
    public static addLangText(element: any, atext: LangText|string): void {
        const telement = Element.getAnyElement(element);

        if (atext instanceof LangText) {
            telement.empty().append(atext.getElement());
        } else {
            telement.empty().append(atext);
        }
    }

    /**
     * setOnClickFn
     * @param {LangTextDefaultClickFn} onClick
     */
    public setOnClickFn(onClick: LangTextDefaultClickFn): void {
        this._element.unbind().on('click', (): void => {
            onClick(this);
        });
    }

    /**
     * setClass
     * @param {string} cssClass
     */
    public setClass(cssClass: string): void {
        this._element.removeClass(this._class).addClass(cssClass);
        this._class = cssClass;
    }

}