import { LeftNavbar } from './LeftNavbar';
/**
 * Left navbar pushmenu
 */
export declare class LeftNavbarPushmenu {
    /**
     * Li
     * @protected
     */
    protected _li: JQuery;
    /**
     * Constructor
     * @param {LeftNavbar} leftNavbar
     */
    constructor(leftNavbar: LeftNavbar);
    /**
     * Get Li element
     * @return {JQuery}
     */
    getLiElement(): JQuery;
}
