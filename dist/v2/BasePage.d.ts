import { IBasePage } from './IBasePage';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { IPageLoader } from './IPageLoader';
/**
 * Base page options
 */
export type BasePageOptions = {
    swal?: SweetAlertOptions;
};
/**
 * Base page
 */
export declare class BasePage implements IBasePage {
    /**
     * page name
     * @protected
     */
    protected _name: string;
    /**
     * Toast
     * @protected
     */
    protected _toast: typeof Swal;
    /**
     * load page fn
     * @protected
     */
    protected _pageLoader: IPageLoader | null;
    /**
     * Constructor
     * @param {BasePageOptions} opt
     */
    constructor(opt?: BasePageOptions);
    /**
     * getName
     */
    getName(): string;
    /**
     * loadContent
     */
    loadContent(): Promise<void>;
    /**
     * unloadContent
     */
    unloadContent(): Promise<void>;
    /**
     * setPageLoader
     * @param loader
     */
    setPageLoader(loader: IPageLoader): void;
}
