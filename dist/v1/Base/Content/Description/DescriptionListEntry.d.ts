import { Component, ComponentType } from '../../Component.js';
import { LangText } from '../../../Lang/LangText.js';
/**
 * Description list entry type
 */
export declare enum DescriptionListEntryType {
    none = 0,
    col_4_8 = 1,
    col_3_9 = 2
}
/**
 * DescriptionListEntry
 */
export declare class DescriptionListEntry extends Component<HTMLElement> {
    /**
     * Label Element
     * @protected
     */
    protected _label: JQuery<HTMLElement>;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionListEntryType} type
     */
    constructor(element: ComponentType, type?: DescriptionListEntryType);
    /**
     * Return the label element
     * @return {JQuery<HTMLElement>}
     */
    getLabelElement(): JQuery<HTMLElement>;
    /**
     * Set the label
     * @param {string|LangText} str
     */
    setLabel(str: string | LangText): void;
}
