import {Component, ComponentType} from './Component.js';

/**
 * ColumnContent
 */
export class ColumnContent extends Component<HTMLSpanElement> {

    /**
     * Constructor
     * @param {[ComponentType[]]} elements
     * @param {[JQuery]} toElement
     */
    public constructor(elements?: ComponentType[], toElement?: JQuery) {
        super();

        if (toElement) {
            this._element = toElement;
        } else {
            this._element = jQuery<HTMLSpanElement>('<span />');
        }

        if (elements) {
            for (const telement of elements) {
                this.add(telement);
            }
        }
    }

    /**
     * add
     * @param {ComponentType} element
     */
    public add(element: ComponentType) {
        if (!Component.isEmpty(this._element)) {
            this._element.append('<br>');
        }

        const telement = Component.getAnyElement(element);

        this._element.append(telement);
    }
}