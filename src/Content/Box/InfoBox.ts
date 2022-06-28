import {Element} from '../../Element';

/**
 * InfoBox
 */
export class InfoBox extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="info-box bg-light" />').appendTo(telement);
    }

}