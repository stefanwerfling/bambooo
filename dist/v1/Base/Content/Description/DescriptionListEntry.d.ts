import { Element } from '../../Element.js';
import { LangText } from '../../../Lang/LangText.js';
export declare enum DescriptionListEntryType {
    none = 0,
    col_4_8 = 1,
    col_3_9 = 2
}
/**
 * DescriptionListEntry
 */
export declare class DescriptionListEntry extends Element {
    /**
     * Label Element
     * @protected
     */
    protected _label: any;
    constructor(element: Element | any, type?: DescriptionListEntryType);
    /**
     * Return the label element
     * @return {any}
     */
    getLabelElement(): any;
    /**
     * Set the label
     * @param {string|LangText} str
     */
    setLabel(str: string | LangText): void;
}
