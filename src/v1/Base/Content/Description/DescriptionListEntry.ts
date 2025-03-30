import {Element} from '../../Element.js';
import {LangText} from '../../../Lang/LangText.js';

export enum DescriptionListEntryType {
    none = 0,
    col_4_8 = 1,
    col_3_9 = 2
}

/**
 * DescriptionListEntry
 */
export class DescriptionListEntry extends Element {

    /**
     * Label Element
     * @protected
     */
    protected _label: any;

    public constructor(element: Element|any, type: DescriptionListEntryType = DescriptionListEntryType.none) {
        super();

        const telement = this._getAnyElement(element);

        this._label = jQuery('<dt />').appendTo(telement);
        this._element = jQuery('<dd> /').appendTo(telement);

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
     * @return {any}
     */
    public getLabelElement(): any {
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