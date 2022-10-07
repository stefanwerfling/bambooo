import {Element} from '../../Element';

/**
 * Form
 */
export class Form extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<form></form>').appendTo(telement);
    }
}