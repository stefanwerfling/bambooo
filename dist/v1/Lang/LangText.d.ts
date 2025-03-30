import { Element } from '../Base/Element.js';
/**
 * LangTextDefaultClickFn
 */
export type LangTextDefaultClickFn = (langText: LangText) => void;
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
     * @param {string} text
     * @param {[string]} cssClass
     * @param {[LangTextDefaultClickFn]} onClick
     */
    constructor(text: string, cssClass?: string, onClick?: LangTextDefaultClickFn);
    /**
     * addLangText
     * @param {any} element
     * @param {LangText|string} atext
     */
    static addLangText(element: any, atext: LangText | string): void;
    /**
     * setOnClickFn
     * @param {LangTextDefaultClickFn} onClick
     */
    setOnClickFn(onClick: LangTextDefaultClickFn): void;
    /**
     * setClass
     * @param {string} cssClass
     */
    setClass(cssClass: string): void;
}
