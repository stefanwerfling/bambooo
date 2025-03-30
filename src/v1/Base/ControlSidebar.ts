/**
 * ControlSidebar
 */
export class ControlSidebar {

    /**
     * element
     * @private
     */
    private _element: any;

    /**
     * constructor
     * @param element
     */
    public constructor(element?: any) {
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
     */
    public getElement(): any {
        return this._element;
    }

}