import { Element } from '../../Element';
import { ButtonDefaultClickFn } from './ButtonDefault';
/**
 * ButtonBorderless
 */
export declare class ButtonBorderless extends Element {
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
    constructor(element: any, title?: string, icon?: string);
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
     * setClickEnable
     * @param enable
     */
    setClickEnable(enable: boolean): void;
}
