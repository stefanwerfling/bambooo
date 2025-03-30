import { Element } from './../../Element.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * Radio
 */
export declare class Radio extends Element {
    /**
     * input radio
     * @protected
     */
    protected _inputRadio: JQuery<HTMLElement>;
    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLElement> | null;
    /**
     * Constructor
     * @param {JQuery<HTMLElement>|any} element
     * @param {string} radionName
     * @param {string} radioValue
     * @param {string|LangText|JQuery<HTMLElement>|null} label
     * @param {boolean} checked
     */
    constructor(element: JQuery<HTMLElement> | any, radionName: string, radioValue: string, label?: string | LangText | JQuery<HTMLElement> | null, checked?: boolean);
    /**
     * Create the label object element
     * @protected
     * @return {JQuery<HTMLElement>}
     */
    protected _getLabel(): JQuery<HTMLElement>;
    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    setLabel(label: string | JQuery<HTMLElement> | LangText): void;
    /**
     * getLabelElement
     * @returns {JQuery<HTMLElement>}
     */
    getLabelElement(): JQuery<HTMLElement>;
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
