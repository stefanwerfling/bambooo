import { LangText } from '../../Lang/LangText.js';
import { SidebarMenu } from './SidebarMenu.js';
import { SidebarMenuTree } from './SidebarMenuTree.js';
/**
 * Type Sidebar menu item click fn
 */
export type SidebarMenuItemClickFn = (event: any) => void;
/**
 * SidebarMenuItem
 */
export declare class SidebarMenuItem {
    /**
     * le element
     * @private
     */
    private readonly _liElement;
    /**
     * a element
     * @private
     */
    private readonly _aElement;
    /**
     * i element
     * @private
     */
    private readonly _iElement;
    /**
     * p element
     * @private
     */
    private readonly _pElement;
    /**
     * Name
     * @private
     */
    private _name;
    /**
     * Icon class
     * @private
     */
    private _iconClass;
    /**
     * Constructor
     * @param {SidebarMenu|SidebarMenuTree} sidebar
     * @param {boolean} isSubItem
     */
    constructor(sidebar: SidebarMenu | SidebarMenuTree, isSubItem?: boolean);
    /**
     * setSymbolColor
     * @param {string} acolor
     */
    setSymbolColor(acolor: string): void;
    /**
     * setActiv
     * @param {boolean} activ
     */
    setActiv(activ: boolean): void;
    /**
     * setIconClass
     * @param {string} iconClass
     */
    setIconClass(iconClass: string): void;
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * setClick
     * @param {SidebarMenuItemClickFn} onClickFn
     */
    setClick(onClickFn: SidebarMenuItemClickFn): void;
    /**
     * getLiElement
     * @return {JQuery}
     */
    getLiElement(): JQuery;
    /**
     * getPElement
     * @return {JQuery}
     */
    getPElement(): JQuery;
    /**
     * setName
     * @param {string} name
     */
    setName(name: string): void;
    /**
     * getName
     * @return {string}
     */
    getName(): string;
}
