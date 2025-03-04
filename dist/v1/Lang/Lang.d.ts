import { LangDefine } from './LangDefine.js';
/**
 * Language translation
 */
export declare class Lang {
    /**
     * Store
     * @private
     */
    private static _store;
    /**
     * Lang instance
     * @private
     */
    private static _instance;
    /**
     * the default lang
     * @private
     */
    private _defaultLang;
    /**
     * current lang
     * @private
     */
    private _lang;
    /**
     * init
     * @param {LangDefine[]} langs
     */
    static init(langs: LangDefine[]): void;
    /**
     * Set the current selected lang
     * @param {string} lang
     */
    static setStoreLangSelect(lang: string): void;
    /**
     * Return the current selected lang
     * @return {string|null}
     */
    static getStoreLangSelect(): string | null;
    /**
     * Add a LangeDefine
     * @param {LangDefine} alang
     */
    static addStore(alang: LangDefine): void;
    /**
     * Return the Lange object instance
     * @param {string|null} langPack
     * @return {Lang}
     */
    static i(langPack?: string | null): Lang;
    /**
     * constructor
     * @param {string} langPack
     * @param {defaultLangPack} defaultLangPack
     */
    constructor(langPack: string, defaultLangPack?: string);
    /**
     * Set the current language
     * @param {LangDefine} alang
     */
    setCurrentLang(alang: LangDefine): void;
    /**
     * Translate a string
     * @param {string} content
     * @return {string}
     */
    l(content: string): string;
    /**
     * lAll - Translate all elements to the current selected lang
     * @param {[any]} aElement - Start by Element or body element
     */
    lAll(aElement?: any): void;
}
