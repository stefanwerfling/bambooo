import { Element } from '../Element';
/**
 * LangTextDefaultClickFn
 */
export type LangTextDefaultClickFn = (langText: Element) => void;
/**
 * LangText
 */
export declare class LangText extends Element {
    /**
     * class
     * @protected
     */
    protected _class: string;
    /**
     * constructor
     * @param text
     */
    constructor(text: string, cssClass?: string, onClick?: LangTextDefaultClickFn);
    /**
     * addLangText
     * @param element
     * @param atext
     */
    static addLangText(element: any, atext: LangText | string): void;
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick: LangTextDefaultClickFn): void;
    /**
     * setClass
     * @param bnClass
     */
    setClass(cssClass: string): void;
}
