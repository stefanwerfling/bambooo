import {Element} from '../Element';

/**
 * RightNavbar
 */
export class RightNavbar extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
        super();

        const telement = this._getAnyElement(element);

        if (telement) {
            this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(telement);
        } else {
            throw Error('right navbar element not found!');
        }
    }

}