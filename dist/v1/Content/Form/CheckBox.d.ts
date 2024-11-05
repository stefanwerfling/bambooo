import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
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
     * Constructor
     * @param {JQuery<HTMLElement>|Element} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element: JQuery<HTMLElement> | Element, label?: string | JQuery<HTMLElement> | LangText);
    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    setLabel(label: string | JQuery<HTMLElement> | LangText): void;
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
