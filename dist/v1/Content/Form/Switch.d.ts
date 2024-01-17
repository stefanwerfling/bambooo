import { Element } from '../../Element';
/**
 * SwitchChangeFn
 */
export type SwitchChangeFn = (value: boolean) => void;
/**
 * Switch
 */
export declare class Switch extends Element {
    /**
     * input
     * @protected
     */
    protected _input: any;
    /**
     * label
     * @protected
     */
    protected _label: any;
    /**
     * constructor
     * @param element
     * @param id
     * @param label
     */
    constructor(element: any, id: string, label?: any);
    /**
     * setLabel
     * @param label
     */
    setLabel(label: any): void;
    /**
     * setEnable
     * @param enable
     */
    setEnable(enable: boolean): void;
    /**
     * isEnable
     */
    isEnable(): boolean;
    /**
     * setChangeFn
     * @param onChangeFn
     */
    setChangeFn(onChangeFn: SwitchChangeFn): void;
    /**
     * setInativ
     * @param inactiv
     */
    setInativ(inactiv: boolean): void;
}
