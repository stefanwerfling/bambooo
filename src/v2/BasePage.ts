import {IBasePage} from './IBasePage';
import Swal, {SweetAlertOptions} from 'sweetalert2';
import {IPageLoader} from './IPageLoader';

/**
 * Base page options
 */
export type BasePageOptions = {
  swal?: SweetAlertOptions;
};

/**
 * Base page
 */
export class BasePage implements IBasePage {

    /**
     * page name
     * @protected
     */
    protected _name: string = 'base';

    /**
     * Toast
     * @protected
     */
    protected _toast: typeof Swal;

    /**
     * load page fn
     * @protected
     */
    protected _pageLoader: IPageLoader | null = null;

    /**
     * Constructor
     * @param {BasePageOptions} opt
     */
    public constructor(opt?: BasePageOptions) {
        let swalOptions: SweetAlertOptions = {
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        };

        if (opt) {
            if (opt.swal) {
                swalOptions = opt.swal;
            }
        }

        this._toast = Swal.mixin(swalOptions);
    }

    /**
     * getName
     */
    public getName(): string {
        return this._name;
    }

    /**
     * loadContent
     */
    public async loadContent(): Promise<void> {
        // load content overwrite
    }

    /**
     * unloadContent
     */
    public async unloadContent(): Promise<void> {
        // unload content overwrite
    }

    /**
     * setPageLoader
     * @param loader
     */
    public setPageLoader(loader: IPageLoader): void {
        this._pageLoader = loader;
    }

}