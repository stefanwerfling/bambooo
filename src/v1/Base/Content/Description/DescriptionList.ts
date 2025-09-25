import {Component, ComponentType} from '../../Component.js';
import {DescriptionListEntry, DescriptionListEntryType} from './DescriptionListEntry.js';

export enum DescriptionListType {
    none = 0,
    horizontal = 1
}

/**
 * Description List
 */
export class DescriptionList extends Component {

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
    public constructor(element: ComponentType, type: DescriptionListType = DescriptionListType.none) {
        super(jQuery('<dl />').appendTo(Component.getAnyElement(element)));

        this._type = type;

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