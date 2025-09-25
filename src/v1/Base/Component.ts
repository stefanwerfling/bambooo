/**
 * Component type
 */
export type ComponentType = unknown|Component|JQuery|HTMLElement;

/**
 * Component
 */
export class Component {

    /**
     * element (jquery)
     * @protected
     */
    protected _element: JQuery;

    /**
     * Constructor
     * @param {ComponentType} aElement
     */
    public constructor(aElement?: ComponentType) {
        if (aElement) {
            this._element = this._getAnyElement(aElement);
        } else {
            this._element = jQuery('');
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
     * Return the main enclosed element
     * @return {JQuery}
     */
    public getElement(): JQuery {
        return this._element;
    }

    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {ComponentType} aelement
     * @return {JQuery}
     * @protected
     */
    public static getAnyElement(aelement?: ComponentType): JQuery {
        if (aelement instanceof Component) {
            return aelement.getElement();
        }

        if (aelement instanceof jQuery) {
            return aelement as JQuery;
        }

        return jQuery(aelement as any);
    }

    /**
     * isEmpty
     * @param el
     */
    public static isEmpty(el: JQuery): Boolean {
        if (el.has('*').length > 0) {
            return false;
        }

        const tmp = el.html();

        return tmp.length === 0;
    }

    /**
     * _getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {unknown|JQuery} aelement
     * @return {JQuery}
     * @protected
     */
    protected _getAnyElement(aelement?: ComponentType): JQuery {
        return Component.getAnyElement(aelement);
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
    public appendTo(telement: Component|string): void {
        if (telement instanceof Component) {
            this._element.appendTo(telement.getElement());
        } else {
            this._element.appendTo(telement);
        }
    }

    /**
     * append
     * @param telement
     */
    public append(telement: Component|string): void {
        if (telement instanceof Component) {
            this._element.append(telement.getElement());
        } else {
            this._element.append(telement);
        }
    }

    /**
     * Helper bool class, add or remove a class
     * @param {string} classname
     * @param {boolean} enable
     * @protected
     */
    protected _boolClass(classname: string, enable: boolean): void {
        if (enable) {
            this._element.addClass(classname);
        } else {
            this._element.removeClass(classname);
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
     * @param {Record<string, string | number>} css
     */
    public setCss(css: Record<string, string | number>): void {
        this._element.css(css);
    }

}