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
     * _uniqId
     * @protected
     */
    protected _uniqId(): string {
        const id = Math.round(new Date().getTime() + (Math.random() * 100));
        return `${id}`;
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
     * helper for giving an element as any (by jquery)
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

        return tmp.length === 0;
    }

    /**
     * _getAnyElement
     * helper for giving an element as any (by jquery)
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

    /**
     * appendTo
     * @param telement
     */
    public appendTo(telement: Element|string): void {
        if (telement instanceof Element) {
            this._element.appendTo(telement.getElement());
        } else {
            this._element.appendTo(telement);
        }
    }

    /**
     * append
     * @param telement
     */
    public append(telement: Element|string): void {
        if (telement instanceof Element) {
            this._element.append(telement.getElement());
        } else {
            this._element.append(telement);
        }
    }

    /**
     * addClass
     * @param aclass
     */
    public addClass(aclass: string): void {
        this._element.addClass(aclass);
    }

    /**
     * setCss
     * @param css
     */
    public setCss(css: object): void {
        this._element.css(css);
    }

}