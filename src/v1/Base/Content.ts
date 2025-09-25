import {Component} from './Component.js';

/**
 * Content
 */
export class Content extends Component {

    /**
     * content fluid element
     * @private
     */
    protected _contentFluidElement: JQuery;

    /**
     * Constructor
     * @param {JQuery} element
     */
    public constructor(element?: JQuery) {
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
     * @return {JQuery}
     */
    public getContentFluidElement(): JQuery {
        return this._contentFluidElement;
    }

    /**
     * empty
     */
    public empty(): void {
        this._contentFluidElement.empty();
    }

}