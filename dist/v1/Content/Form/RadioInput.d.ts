import { Element } from '../../Element';
/**
 * RadioInputClickFn
 */
export type RadioInputClickFn = () => void;
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
     * Set input Value
     * @param {string} value
     */
    setInputValue(value: string): void;
    /**
     * Return the input value
     * @returns {string}
     */
    getInputValue(): string;
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
    /**
     * Set Input ReadOnly
     * @param {boolean} readonly
     */
    setInputReadOnly(readonly: boolean): void;
    /**
     * Is Input readonly
     * @returns {boolean}
     */
    isInputReadOnly(): boolean;
    /**
     * Set the onclick function for radio input
     * @param {RadioInputClickFn} fn
     */
    setOnClickFnRadio(fn: RadioInputClickFn): void;
}
