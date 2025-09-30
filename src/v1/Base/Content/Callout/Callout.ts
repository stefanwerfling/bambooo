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
export class Callout extends Component<HTMLElement> {

    /**
     * Main Element
     * @protected
     */
    protected _mainElement: JQuery<HTMLDivElement>;

    /**
     * Title
     * @protected
     */
    protected _title: JQuery<HTMLHeadingElement>;

    /**
     * constructor
     * @param {ComponentType} element
     * @param {CalloutType} type
     */
    public constructor(element: ComponentType, type: CalloutType = CalloutType.info) {
        const mainElement = jQuery<HTMLDivElement>(`<div class="callout ${type}" />`).appendTo(Component.getAnyElement(element));
        const title = jQuery<HTMLHeadingElement>('<h5/>').appendTo(mainElement);

        super(jQuery<HTMLElement>('<p/>').appendTo(mainElement));

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
     * @returns {JQuery<HTMLDivElement>}
     */
    public getMainElement(): JQuery<HTMLDivElement> {
        return this._mainElement;
    }

}