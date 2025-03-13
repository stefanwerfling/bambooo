import {Element} from './Element';

/**
 * Content
 */
export class Content extends Element {

    /**
     * content fluid element
     * @private
     */
    private _contentFluidElement: any;

    /**
     * constructor
     * @param {any} element
     */
    public constructor(element?: any) {
        super();

        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.content-wrapper');
        }

        if (this._element.length === 0) {
            throw Error('content element not found!');
        }

        this._contentFluidElement = jQuery('<div class="container-fluid"/>').appendTo(this._element);
    }

    /**
     * getContentFluidElement
     * @return {any}
     */
    public getContentFluidElement(): any {
        return this._contentFluidElement;
    }

    /**
     * empty
     */
    public empty(): void {
        this._contentFluidElement.empty();
    }

}