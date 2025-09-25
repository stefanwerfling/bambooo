/**
 * ControlSidebar
 */
export class ControlSidebar {

    /**
     * element
     * @private
     */
    protected _element: JQuery;

    /**
     * Constructor
     * @param {JQuery} element
     */
    public constructor(element?: JQuery) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.control-sidebar');
        }

        if (this._element.length === 0) {
            throw Error('control sidebar element not found!');
        }
    }

    /**
     * getElement
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

}