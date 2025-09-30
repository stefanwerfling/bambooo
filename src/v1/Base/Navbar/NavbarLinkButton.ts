import {Component, ComponentType} from '../Component.js';

/**
 * NavbarLinkButtonFn
 */
export type NavbarLinkButtonFn = (event: any) => void;

/**
 * NavbarLinkButton
 */
export class NavbarLinkButton extends Component<HTMLLIElement> {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} icon
     * @param {NavbarLinkButtonFn} click
     */
    public constructor(element: ComponentType, icon: string, click: NavbarLinkButtonFn) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery<HTMLLIElement>('<li class="nav-item" />').appendTo(telement);
        const a = jQuery('<a class="nav-link" href="#" role="button" />').appendTo(this._element);
        jQuery(`<i class="fas ${icon}" />`).appendTo(a);

        a.on('click', (event: any) => {
            click(event);
            return false;
        });
    }

}