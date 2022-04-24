import { Element } from '../../Element';
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
    success = "btn-success"
}
export declare type ButtonDefaultClickFn = () => void;
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
    protected _title: string;
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
     * @param element
     * @param title
     * @param icon
     * @param bnClass
     * @param bnType
     */
    constructor(element: any, title?: string, icon?: string, bnClass?: ButtonClass, bnType?: ButtonDefaultType);
    /**
     * setValue
     * @param title
     * @param icon
     */
    setValue(title?: string, icon?: string): void;
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
