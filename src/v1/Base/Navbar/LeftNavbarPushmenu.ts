import {LeftNavbar} from './LeftNavbar';

/**
 * Left navbar pushmenu
 */
export class LeftNavbarPushmenu {

    /**
     * Li
     * @protected
     */
    protected _li: JQuery;

    /**
     * Constructor
     * @param {LeftNavbar} leftNavbar
     */
    public constructor(leftNavbar: LeftNavbar) {
        this._li = jQuery('<li class="nav-item" />').appendTo(leftNavbar.getElement());
        jQuery('<a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>').appendTo(this._li);
    }

    /**
     * Get Li element
     * @return {JQuery}
     */
    public getLiElement(): JQuery {
        return this._li;
    }

}