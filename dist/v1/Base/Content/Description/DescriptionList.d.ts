import { Component, ComponentType } from '../../Component.js';
import { DescriptionListEntry, DescriptionListEntryType } from './DescriptionListEntry.js';
export declare enum DescriptionListType {
    none = 0,
    horizontal = 1
}
/**
 * Description List
 */
export declare class DescriptionList extends Component {
    /**
     * Type
     * @protected
     */
    protected _type: DescriptionListType;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionListType} type
     */
    constructor(element: ComponentType, type?: DescriptionListType);
    /**
     * Create an Entry
     * @param {DescriptionListEntryType} type
     * @return {DescriptionListEntry}
     */
    createEntry(type?: DescriptionListEntryType): DescriptionListEntry;
}
