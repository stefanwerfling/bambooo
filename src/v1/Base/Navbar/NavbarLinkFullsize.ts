import {Component, ComponentType} from '../Component.js';

/**
 * NavbarLinkFullsize
 */
export class NavbarLinkFullsize extends Component<HTMLLIElement> {

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery<HTMLLIElement>('<li class="nav-item" />').appendTo(telement);
        const a = jQuery('<a class="nav-link" data-widget="fullscreen" href="#" role="button" />').appendTo(this._element);
        jQuery('<i class="fas fa-expand-arrows-alt" />').appendTo(a);
    }

}