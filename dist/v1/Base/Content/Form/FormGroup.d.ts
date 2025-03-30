import { Element } from './../../Element.js';
import { LangText } from './../../../Lang/LangText.js';
/**
 * FormGroup
 */
export declare class FormGroup extends Element {
    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLElement> | null;
    /**
     * constructor
     * @param {JQuery<HTMLElement>} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element: JQuery<HTMLElement> | Element, label?: string | JQuery<HTMLElement> | LangText);
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
     * Clear the elements from the group
     */
    clear(): void;
}
