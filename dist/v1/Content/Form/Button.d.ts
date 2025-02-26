import { Element } from '../../Element';
import { ButtonClass } from '../Button/ButtonClass.js';
/**
 * ButtonType
 */
export declare enum ButtonType {
    default = "default",
    borderless = "borderless",
    cardCollapse = "cardCollapse"
}
/**
 * ButtonClickFn
 */
export type ButtonClickFn = () => void;
/**
 * Button
 */
export declare class Button extends Element {
    /**
     * click enable
     * @protected
     */
    protected _clickEnable: boolean;
    /**
     * constructor
     * @param {any} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    constructor(element: any, type?: ButtonType, bnClass?: ButtonClass, moreClass?: string, moreAttr?: string);
    /**
     * setOnClickFn
     * @param {ButtonClickFn} onClick
     */
    setOnClickFn(onClick: ButtonClickFn): void;
    /**
     * setClickEnable
     * @param {boolean} enable
     */
    setClickEnable(enable: boolean): void;
}
