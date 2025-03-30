import {LangText} from '../../Lang/LangText.js';
import {SidebarMenu} from './SidebarMenu.js';
import {SidebarMenuTree} from './SidebarMenuTree.js';

/**
 * Type Sidebar menu item click fn
 */
export type SidebarMenuItemClickFn = (event: any) => void;

/**
 * SidebarMenuItem
 */
export class SidebarMenuItem {

    /**
     * le element
     * @private
     */
    private readonly _liElement: any;

    /**
     * a element
     * @private
     */
    private readonly _aElement: any;

    /**
     * i element
     * @private
     */
    private readonly _iElement: any;

    /**
     * p element
     * @private
     */
    private readonly _pElement: any;

    /**
     * Name
     * @private
     */
    private _name: string = 'unknow';

    /**
     * Icon class
     * @private
     */
    private _iconClass: string = 'fa-circle';

    /**
     * constructor
     * @param {SidebarMenu|SidebarMenuTree} sidebar
     * @param {boolean} isSubItem
     */
    public constructor(sidebar: SidebarMenu|SidebarMenuTree, isSubItem: boolean = false) {
        this._liElement = jQuery('<li class="nav-item" />').appendTo(sidebar.getUlElement());
        this._aElement = jQuery('<a href="#" class="nav-link" />').appendTo(this._liElement);
        this._iElement = jQuery('<i />').appendTo(this._aElement);
        this._iElement.addClass(`nav-icon fas ${this._iconClass}`);
        this._pElement = jQuery('<p />').appendTo(this._aElement);

        if (isSubItem) {
            this._aElement.css({
                'padding-left': '2em'
            });
        }

        sidebar.addMenuItem(this);
    }

    /**
     * setSymbolColor
     * @param {string} acolor
     */
    public setSymbolColor(acolor: string): void {
        this._iElement.css({
            color: acolor
        });
    }

    /**
     * setActiv
     * @param {boolean} activ
     */
    public setActiv(activ: boolean): void {
        this._aElement.removeClass().addClass('nav-link');

        if (activ) {
            this._aElement.addClass('active');
        }
    }

    /**
     * setIconClass
     * @param {string} iconClass
     */
    public setIconClass(iconClass: string): void {
        this._iconClass = iconClass;
        this._iElement.removeClass().addClass(`nav-icon fas ${this._iconClass}`);
    }

    /**
     * setTitle
     * @param {string|LangText} title
     */
    public setTitle(title: string|LangText): void {
        LangText.addLangText(this._pElement, title);
    }

    /**
     * setClick
     * @param {SidebarMenuItemClickFn} onClickFn
     */
    public setClick(onClickFn: SidebarMenuItemClickFn): void {
        this._aElement.unbind().on('click', onClickFn);
    }

    /**
     * getLiElement
     * @return {any}
     */
    public getLiElement(): any {
        return this._liElement;
    }

    /**
     * getPElement
     * @return {any}
     */
    public getPElement(): any {
        return this._pElement;
    }

    /**
     * setName
     * @param {string} name
     */
    public setName(name: string): void {
        this._name = name;
    }

    /**
     * getName
     * @return {string}
     */
    public getName(): string {
        return this._name;
    }

}