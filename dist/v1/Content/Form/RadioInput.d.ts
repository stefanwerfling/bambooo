import { Element } from '../../Element';
/**
 * RadioInput
 */
export declare class RadioInput extends Element {
    /**
     * input radio
     * @protected
     */
    protected _inputRadio: any;
    /**
     * input
     * @protected
     */
    protected _input: any;
    /**
     * Constructor
     * @param {any} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string} nameInput
     * @param {string} inputValue
     * @param {string} checked
     */
    constructor(element: any, radionName: string, radioValue: string, nameInput: string, inputValue: string, checked?: boolean);
    /**
     * Set Value
     * @param value
     */
    setValue(value: string): void;
    /**
     * getValue
     */
    getValue(): string;
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
