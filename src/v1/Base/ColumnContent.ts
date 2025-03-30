import {Element} from './Element';

/**
 * ColumnContent
 */
export class ColumnContent extends Element {

    /**
     * constructor
     * @param {[any[]]} elements
     * @param {[any]} toElement
     */
    public constructor(elements?: any[], toElement?: any) {
        super();

        if (toElement) {
            this._element = toElement;
        } else {
            this._element = jQuery('<span />');
        }

        if (elements) {
            for (const telement of elements) {
                this.add(telement);
            }
        }
    }

    /**
     * add
     * @param {any} element
     */
    public add(element: any) {
        if (!Element.isEmpty(this._element)) {
            this._element.append('<br>');
        }

        const telement = Element.getAnyElement(element);

        this._element.append(telement);
    }
}