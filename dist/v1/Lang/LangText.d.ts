import { Component } from '../Base/Component.js';
/**
 * LangTextDefaultClickFn
 */
export type LangTextDefaultClickFn = (langText: LangText) => void;
/**
 * LangText
 */
export declare class LangText extends Component {
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
    /**
     * Return the text but translated
     * @return {string}
     */
    getTranslatedText(): string;
    /**
     * Return the orginal text
     * @return {string}
     */
    getOrginalText(): string;
}
