import { Element } from '../../Element';
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
     * constructor
     * @param {any} element
     * @param {ButtonType} type
     */
    constructor(element: any, type?: ButtonType);
    /**
     * setOnClickFn
     * @param {ButtonClickFn} onClick
     */
    setOnClickFn(onClick: ButtonClickFn): void;
}
