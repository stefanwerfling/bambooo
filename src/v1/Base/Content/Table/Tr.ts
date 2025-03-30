import {Element} from '../../Element';

/**
 * Tr
 */
export class Tr extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<tr />').appendTo(telement);
    }

}