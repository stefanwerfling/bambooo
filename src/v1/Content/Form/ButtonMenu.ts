import {LangText} from '../../Lang/LangText';
import {Icon, IconFa} from '../Icon/Icon';
import {Button, ButtonClickFn, ButtonType} from './Button';

/**
 * ButtonMenuPosition
 */
export enum ButtonMenuPosition {
    none = 'unset',
    relative = 'relative'
}

/**
 * ButtonMenu
 */
export class ButtonMenu extends Button {

    /**
     * div group
     * @protected
     */
    protected _divGrp: any;

    /**
     * div drop down menu
     * @protected
     */
    protected _divDropDownMenu: any;

    /**
     * constructor
     * @param element
     * @param icon
     * @param positonRight
     * @param type
     * @param position
     */
    public constructor(
        element: any,
        icon: IconFa|string|null = null,
        positonRight: boolean = false,
        type: ButtonType = ButtonType.default,
        position: ButtonMenuPosition = ButtonMenuPosition.relative
    ) {
        const divGrp = jQuery('<div class="btn-group"/>');
        divGrp.css('position', `${position}`);

        super(divGrp, type);

        const telement = this._getAnyElement(element);
        divGrp.appendTo(telement)

        if (icon !== null) {
            new Icon(this._element, icon);
        }

        this._element.addClass('dropdown-toggle');
        this._element.attr('data-toggle', 'dropdown');
        this._element.attr('aria-expanded', 'false');
        this._divGrp = divGrp;

        this._divDropDownMenu = jQuery('<div class="dropdown-menu"/>').appendTo(this._divGrp);

        if (positonRight) {
            this._divDropDownMenu.addClass('dropdown-menu-right');
        }
    }

    /**
     * addMenuItem
     * @param title
     * @param clickFn
     * @param icon
     */
    public addMenuItem(title: any|LangText, clickFn: ButtonClickFn, icon: IconFa|null = null): void {
        const item = jQuery('<a class="dropdown-item" href="#"/>');

        item.appendTo(this._divDropDownMenu);

        if (icon !== null) {
            new Icon(item, icon);

            item.append('&nbsp;');
        }

        const textSpan = jQuery('<span></span>').appendTo(item);
        LangText.addLangText(textSpan, title);

        item.on('click', (event: any): void => {
            clickFn();
            //event.stopPropagation();
            event.preventDefault();
        });
    }

    /**
     * addDivider
     */
    public addDivider(): void {
        jQuery('<div class="dropdown-divider"/>').appendTo(this._divDropDownMenu);
    }

}