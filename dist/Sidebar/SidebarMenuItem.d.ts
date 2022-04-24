import { SidebarMenu } from './SidebarMenu';
import { SidebarMenuTree } from './SidebarMenuTree';
export declare type SidebarMenuItemClickFn = (event: any) => void;
/**
 * SidebarMenuItem
 */
export declare class SidebarMenuItem {
    private readonly _liElement;
    private readonly _aElement;
    private readonly _iElement;
    private readonly _pElement;
    private _name;
    private _iconClass;
    /**
     * constructor
     * @param sidebar
     */
    constructor(sidebar: SidebarMenu | SidebarMenuTree);
    /**
     * setSymbolColor
     * @param acolor
     */
    setSymbolColor(acolor: string): void;
    /**
     * setActiv
     * @param activ
     */
    setActiv(activ: boolean): void;
    /**
     * setIconClass
     * @param iconClass
     */
    setIconClass(iconClass: string): void;
    /**
     * setTitle
     * @param title
     */
    setTitle(title: string): void;
    /**
     * setClick
     * @param onClickFn
     */
    setClick(onClickFn: SidebarMenuItemClickFn): void;
    /**
     * getLiElement
     */
    getLiElement(): any;
    /**
     * getPElement
     */
    getPElement(): any;
    /**
     * setName
     * @param name
     */
    setName(name: string): void;
    /**
     * getName
     */
    getName(): string;
}
