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
     * @param element
     * @param icon
     * @param positonRight
     * @param type
     * @param position
     */
    constructor(element: any, icon?: IconFa | string | null, positonRight?: boolean, type?: ButtonType, position?: ButtonMenuPosition);
    /**
     * addMenuItem
     * @param title
     * @param clickFn
     * @param icon
     */
    addMenuItem(title: any | LangText, clickFn: ButtonClickFn, icon?: IconFa | null): void;
    /**
     * addDivider
     */
    addDivider(): void;
}
