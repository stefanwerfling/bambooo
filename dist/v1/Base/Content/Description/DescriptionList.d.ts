import { Element } from '../../Element.js';
import { DescriptionListEntry, DescriptionListEntryType } from './DescriptionListEntry.js';
export declare enum DescriptionListType {
    none = 0,
    horizontal = 1
}
/**
 * Description List
 */
export declare class DescriptionList extends Element {
    protected _type: DescriptionListType;
    /**
     * constructor
     * @param {Element|any} element
     * @param {DescriptionListType} type
     */
    constructor(element: Element | any, type?: DescriptionListType);
    /**
     * Create an Entry
     * @param {DescriptionListEntryType} type
     * @return {DescriptionListEntry}
     */
    createEntry(type?: DescriptionListEntryType): DescriptionListEntry;
}
