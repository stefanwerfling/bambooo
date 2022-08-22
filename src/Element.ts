/**
 * Element
 */
export class Element {

    /**
     * element (jquery)
     * @protected
     */
    protected _element: any;

    /**
     * constructor
     * @param aelement
     */
    public constructor(aelement?: any) {
        if (aelement) {
            this._element = this._getAnyElement(aelement);
        }
    }

    /**
     * getElement
     * return the main enclosed element
     */
    public getElement(): any {
        return this._element;
    }

    /**
     * getAnyElement
     * helper for giving a element as any (by jquery)
     * @param aelement
     * @protected
     */
    public static getAnyElement(aelement?: any): any {
        if (aelement instanceof Element) {
            return aelement.getElement();
        }

        return aelement;
    }

    /**
     * isEmpty
     * @param el
     */
    public static isEmpty(el: any) {
        if (el.has('*').length > 0) {
            return false;
        }

        const tmp = el.html();

        if (tmp.length !== 0) {
            return false;
        }

        return true;
    }

    /**
     * _getAnyElement
     * helper for giving a element as any (by jquery)
     * @param aelement
     * @protected
     */
    protected _getAnyElement(aelement?: any): any {
        return Element.getAnyElement(aelement);
    }

    /**
     * hide
     */
    public hide(): void {
        this._element.hide();
    }

    /**
     * show
     */
    public show(): void {
        this._element.show();
    }

}