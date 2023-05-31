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
     * @param element
     * @param type
     */
    constructor(element: any, type?: ButtonType);
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick: ButtonClickFn): void;
}
