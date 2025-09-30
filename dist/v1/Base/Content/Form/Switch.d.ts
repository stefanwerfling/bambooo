import { Component, ComponentType } from '../../Component.js';
/**
 * SwitchChangeFn
 */
export type SwitchChangeFn = (value: boolean) => void;
/**
 * Switch
 */
export declare class Switch extends Component<HTMLDivElement> {
    /**
     * input
     * @protected
     */
    protected _input: JQuery<HTMLInputElement>;
    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLLabelElement>;
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} id
     * @param {JQuery|string} label
     */
    constructor(element: ComponentType, id: string, label?: JQuery | string);
    /**
     * setLabel
     * @param {JQuery|string} label
     */
    setLabel(label: JQuery | string): void;
    /**
     * setEnable
     * @param {boolean} enable
     */
    setEnable(enable: boolean): void;
    /**
     * isEnable
     * @return {boolean}
     */
    isEnable(): boolean;
    /**
     * setChangeFn
     * @param {SwitchChangeFn} onChangeFn
     */
    setChangeFn(onChangeFn: SwitchChangeFn): void;
    /**
     * setInativ
     * @param {boolean} inactiv
     */
    setInativ(inactiv: boolean): void;
}
