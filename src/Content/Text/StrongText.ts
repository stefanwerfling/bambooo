import {Element} from '../../Element';

/**
 * StrongText
 */
export class StrongText extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<strong/>`).appendTo(telement);
    }
}