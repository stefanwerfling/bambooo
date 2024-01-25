import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * ButtonDefaultType
 */
export declare enum ButtonDefaultType {
    none = "",
    small = "btn-sm"
}
/**
 * ButtonClass
 */
export declare enum ButtonClass {
    default = "btn-default",
    info = "btn-info",
    danger = "btn-danger",
    warning = "btn-warning",
    success = "btn-success",
    primary = "btn-primary",
    tool = "btn-tool"
}
/**
 * ButtonDefaultClickFn
 */
export type ButtonDefaultClickFn = () => void;
/**
 * ButtonDefault
 */
export declare class ButtonDefault extends Element {
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
     * click enable
     * @protected
     */
    protected _clickEnable: boolean;
    /**
     * constructor
     * @param {any} element
     * @param {string|LangText} title
     * @param {string} icon
     * @param {ButtonClass} bnClass
     * @param {ButtonDefaultType} bnType
     */
    constructor(element: any, title?: string | LangText, icon?: string, bnClass?: ButtonClass, bnType?: ButtonDefaultType);
    /**
     * setValue
     * @param {string|LangText} title
     * @param {string} icon
     */
    setValue(title?: string | LangText, icon?: string): void;
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick: ButtonDefaultClickFn): void;
    /**
     * setClass
     * @param bnClass
     */
    setClass(bnClass?: ButtonClass): void;
    /**
     * setClickEnable
     * @param enable
     */
    setClickEnable(enable: boolean): void;
}
