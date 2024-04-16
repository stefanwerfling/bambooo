import { LangText } from '../../Lang/LangText';
import { IconFa } from '../Icon/Icon';
import { Button, ButtonClickFn, ButtonType } from './Button';
/**
 * ButtonMenuPosition
 */
export declare enum ButtonMenuPosition {
    none = "unset",
    relative = "relative"
}
/**
 * ButtonMenu
 */
export declare class ButtonMenu extends Button {
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
     * @param {any} element
     * @param {IconFa|string|null} icon
     * @param {boolean} positonRight
     * @param {ButtonType} type
     * @param {ButtonMenuPosition} position
     */
    constructor(element: any, icon?: IconFa | string | null, positonRight?: boolean, type?: ButtonType, position?: ButtonMenuPosition);
    /**
     * addMenuItem
     * @param {any|LangText} title
     * @param {ButtonClickFn} clickFn
     * @param {IconFa|string|null} icon
     */
    addMenuItem(title: any | LangText, clickFn: ButtonClickFn, icon?: IconFa | string | null): void;
    /**
     * addDivider
     */
    addDivider(): void;
}
