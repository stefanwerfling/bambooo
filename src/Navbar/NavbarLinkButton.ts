import {Element} from '../Element';

/**
 * NavbarLinkButtonFn
 */
export type NavbarLinkButtonFn = (event: any) => void;

/**
 * NavbarLinkButton
 */
export class NavbarLinkButton extends Element {

    /**
     * constructor
     * @param element
     */
    public constructor(element: any, icon: string, click: NavbarLinkButtonFn) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<li class="nav-item" />').appendTo(telement);
        const a = jQuery('<a class="nav-link" href="#" role="button" />').appendTo(this._element);
        jQuery(`<i class="fas ${icon}" />`).appendTo(a);

        a.on('click', (event: any) => {
            click(event);
            return false;
        });
    }

}