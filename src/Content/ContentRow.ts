import {Content} from '../Content';

/**
 * ContentRow
 */
export class ContentRow {

    /**
     * element
     * @private
     */
    private _element: any;

    /**
     * constructor
     * @param content
     */
    public constructor(content: Content) {
        this._element = jQuery('<div class="row" />').appendTo(content.getContentFluidElement());
    }

    /**
     * getElement
     */
    public getElement(): any {
        return this._element;
    }

}