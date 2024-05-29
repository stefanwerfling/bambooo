import { Element } from '../../Element';
export declare class CheckBox extends Element {
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
     * @param label
     */
    constructor(element: any, label?: any);
    /**
     * setLabel
     * @param label
     */
    setLabel(label: any): void;
    /**
     * setReadOnly
     * @param readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * isReadOnly
     */
    isReadOnly(): boolean;
    /**
     * is box checked
     * @returns {boolean}
     */
    isChecked(): boolean;
    /**
     * Set the box checked or remove checked
     * @param {boolean} checked
     */
    setChecked(checked: boolean): void;
}
