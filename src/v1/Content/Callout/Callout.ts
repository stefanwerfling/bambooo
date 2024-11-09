import {Element} from '../../Element';

export enum CalloutType {
    warning = 'callout-warning',
    danger = 'callout-danger',
    info = 'callout-info',
    success = 'callout-success',
    default = ''
}

/**
 * Callout
 */
export class Callout extends Element {

    protected _mainElement: any;
    protected _title: any;

    /**
     * constructor
     * @param {any|Element} element
     * @param {CalloutType} type
     */
    public constructor(element: any|Element, type: CalloutType = CalloutType.info) {
        super();

        const telement = this._getAnyElement(element);

        this._mainElement = jQuery(`<div class="callout ${type}" />`).appendTo(telement);

        this._title = jQuery('<h5/>').appendTo(this._mainElement);
        this._element = jQuery('<p/>').appendTo(this._mainElement);
    }

    /**
     * Set Title
     * @param {string} title
     */
    public setTitle(title: string): void {
        this._title.empty().append(title);
    }

    /**
     * Return the main Element
     * @returns {any}
     */
    public getMainElement(): any {
        return this._mainElement;
    }

}