import { LangDefine } from '../../Lang/LangDefine.js';
import { Component, ComponentType } from '../Component.js';
/**
 * ChangeLangClickFn
 */
export type ChangeLangClickFn = (lang: LangDefine) => void;
/**
 * NavbarLinkLanguage
 */
export declare class NavbarLinkLanguage extends Component {
    /**
     * link
     * @protected
     */
    protected _a: JQuery;
    /**
     * lang menu
     * @protected
     */
    protected _menu: JQuery;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
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
