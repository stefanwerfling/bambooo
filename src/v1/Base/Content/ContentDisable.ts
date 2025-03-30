import {Element} from '../Element';

/**
 * ContentDisable
 */
export class ContentDisable extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="overlay dark"></div>').appendTo(telement);
    }

}