import {Component, ComponentType} from '../../Component.js';
import {LangText} from '../../../Lang/LangText.js';

/**
 * Description list entry type
 */
export enum DescriptionListEntryType {
    none = 0,
    col_4_8 = 1,
    col_3_9 = 2
}

/**
 * DescriptionListEntry
 */
export class DescriptionListEntry extends Component {

    /**
     * Label Element
     * @protected
     */
    protected _label: JQuery;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {DescriptionListEntryType} type
     */
    public constructor(element: ComponentType, type: DescriptionListEntryType = DescriptionListEntryType.none) {
        const telement = Component.getAnyElement(element);

        const label = jQuery('<dt />').appendTo(telement);

        super(jQuery('<dd> /').appendTo(telement));

        this._label = label;

        switch (type) {
            case DescriptionListEntryType.col_4_8:
                this._label.addClass('col-sm-4');
                this._element.addClass('col-sm-8');
                break;

            case DescriptionListEntryType.col_3_9:
                this._label.addClass('col-sm-3');
                this._element.addClass('col-sm-9');
                break;
        }
    }

    /**
     * Return the label element
     * @return {JQuery}
     */
    public getLabelElement(): JQuery {
        return this._label;
    }

    /**
     * Set the label
     * @param {string|LangText} str
     */
    public setLabel(str: string|LangText): void {
        LangText.addLangText(this._label.empty(), str);
    }

}