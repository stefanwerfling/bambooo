import {Element} from '../../Element.js';
import {DescriptionListEntry, DescriptionListEntryType} from './DescriptionListEntry.js';

export enum DescriptionListType {
    none = 0,
    horizontal = 1
}

/**
 * Description List
 */
export class DescriptionList extends Element {

    protected _type: DescriptionListType;

    /**
     * constructor
     * @param {Element|any} element
     * @param {DescriptionListType} type
     */
    public constructor(element: Element|any, type: DescriptionListType = DescriptionListType.none) {
        super();

        this._type = type;

        const telement = this._getAnyElement(element);

        this._element = jQuery('<dl />').appendTo(telement);

        switch (this._type) {
            case DescriptionListType.horizontal:
                this._element.addClass('row');
                break;
        }
    }

    /**
     * Create an Entry
     * @param {DescriptionListEntryType} type
     * @return {DescriptionListEntry}
     */
    public createEntry(type: DescriptionListEntryType = DescriptionListEntryType.none): DescriptionListEntry {
        let aType = DescriptionListEntryType.none;

        switch (this._type) {
            case DescriptionListType.horizontal:
                aType = type;
                break;
        }

        return new DescriptionListEntry(this, aType);
    }

}