import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
/**
 * FormGroup
 */
export declare class FormGroup extends Element {
    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLElement>;
    /**
     * constructor
     * @param {JQuery<HTMLElement>} element
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    constructor(element: JQuery<HTMLElement> | Element, label?: string | JQuery<HTMLElement> | LangText);
    /**
     * setLabel
     * @param {string|JQuery<HTMLElement>|LangText} label
     */
    setLabel(label: string | JQuery<HTMLElement> | LangText): void;
    /**
     * getLabelElement
     * @returns {JQuery<HTMLElement>}
     */
    getLabelElement(): any;
}
