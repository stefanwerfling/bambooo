import {Component, ComponentType} from '../../Component.js';

/**
 * Callout type
 */
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
export class Callout extends Component {

    /**
     * Main Element
     * @protected
     */
    protected _mainElement: JQuery;

    /**
     * Title
     * @protected
     */
    protected _title: JQuery;

    /**
     * constructor
     * @param {ComponentType} element
     * @param {CalloutType} type
     */
    public constructor(element: ComponentType, type: CalloutType = CalloutType.info) {
        const mainElement = jQuery(`<div class="callout ${type}" />`).appendTo(Component.getAnyElement(element));
        const title = jQuery('<h5/>').appendTo(mainElement);

        super(jQuery('<p/>').appendTo(mainElement));

        this._mainElement = mainElement;
        this._title = title;
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
     * @returns {JQuery}
     */
    public getMainElement(): JQuery {
        return this._mainElement;
    }

}