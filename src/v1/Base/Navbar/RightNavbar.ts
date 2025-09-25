import {Component, ComponentType} from '../Component.js';

/**
 * RightNavbar
 */
export class RightNavbar extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element?: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        if (telement) {
            this._element = jQuery('<ul class="navbar-nav ml-auto" />').appendTo(telement);
        } else {
            throw Error('right navbar element not found!');
        }
    }

}