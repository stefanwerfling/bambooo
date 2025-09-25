import { Component, ComponentType } from '../../Component.js';
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
 * Button Shape
 */
export declare enum ButtonShape {
    none = "",
    lg = "btn-lg",
    sm = "btn-sm",
    xs = "btn-xs",
    flat = "btn-flat"
}
/**
 * ButtonClickFn
 */
export type ButtonClickFn = () => void;
/**
 * Button
 */
export declare class Button extends Component {
    /**
     * click enable
     * @protected
     */
    protected _clickEnable: boolean;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {ButtonShape|string} shape
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    constructor(element: ComponentType, type?: ButtonType, bnClass?: ButtonClass, shape?: ButtonShape | string, moreClass?: string, moreAttr?: string);
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
    /**
     * setDisabled
     * @param {boolean} disable
     */
    setDisabled(disable: boolean): void;
}
