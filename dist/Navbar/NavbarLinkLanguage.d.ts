/// <reference types="jquery" />
/// <reference types="bootstrap" />
import { LangDefine } from '../Lang/LangDefine';
import { Element } from '../Element';
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
     * @param element
     */
    constructor(element: any);
    /**
     * addLang
     * @param lang
     */
    addLang(lang: LangDefine, click: ChangeLangClickFn): void;
    /**
     * setActiv
     * @param countryCode
     * @param triggerClick
     */
    setActiv(countryCode: string, triggerClick: boolean): void;
}
