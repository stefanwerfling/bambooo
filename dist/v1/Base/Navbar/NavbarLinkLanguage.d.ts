import { LangDefine } from '../../Lang/LangDefine.js';
import { Element } from '../Element.js';
/**
 * ChangeLangClickFn
 */
export type ChangeLangClickFn = (lang: LangDefine) => void;
/**
 * NavbarLinkLanguage
 */
export declare class NavbarLinkLanguage extends Element {
    /**
     * link
     * @protected
     */
    protected _a: JQuery<HTMLElement>;
    /**
     * lang menu
     * @protected
     */
    protected _menu: JQuery<HTMLElement>;
    /**
     * constructor
     * @param {any} element
     */
    constructor(element: any);
    /**
     * addLang
     * @param {LangDefine} lang
     * @param {ChangeLangClickFn} click
     */
    addLang(lang: LangDefine, click: ChangeLangClickFn): void;
    /**
     * setActiv
     * @param {string} countryCode
     * @param {boolean} triggerClick
     */
    setActiv(countryCode: string, triggerClick: boolean): void;
}
