import {Component, ComponentType} from '../Component.js';

/**
 * ContentDisable
 */
export class ContentDisable extends Component<HTMLDivElement> {

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery<HTMLDivElement>('<div class="overlay dark"></div>').appendTo(telement);
    }

}