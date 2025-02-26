import { LangText } from '../../Lang/LangText';
import { Button, ButtonShape } from '../Form/Button.js';
import { ButtonClass } from './ButtonClass';
/**
 * ButtonDefaultType
 */
export declare enum ButtonDefaultType {
    none = "",
    small = "btn-sm"
}
/**
 * Button default Position
 */
export declare enum ButtonDefaultPosition {
    left = "",
    right = "float-right"
}
/**
 * ButtonDefaultClickFn
 */
export type ButtonDefaultClickFn = () => void;
/**
 * ButtonDefault
 */
export declare class ButtonDefault extends Button {
    /**
     * class
     * @protected
     */
    protected _class: ButtonClass;
    /**
     * title
     * @protected
     */
    protected _title: string | LangText;
    /**
     * icon
     * @protected
     */
    protected _icon: string;
    /**
     * constructor
     * @param {any} element
     * @param {string|LangText} title
     * @param {string} icon
     * @param {ButtonClass} bnClass
     * @param {ButtonDefaultType|ButtonShape} bnType
     * @param {string} moreAttr
     * @param {ButtonDefaultPosition} position
     */
    constructor(element: any, title?: string | LangText, icon?: string, bnClass?: ButtonClass, bnType?: ButtonDefaultType | ButtonShape, moreAttr?: string, position?: ButtonDefaultPosition);
    /**
     * setValue
     * @param {string|LangText} title
     * @param {string} icon
     */
    setValue(title?: string | LangText, icon?: string): void;
    /**
     * setClass
     * @param bnClass
     */
    setClass(bnClass?: ButtonClass): void;
}
