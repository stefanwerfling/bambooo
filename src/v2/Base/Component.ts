/**
 * Component options
 */
export type ComponentOptions = {
    element?: JQuery;
    emptyElement?: boolean;
    children?: Component[];
};

/**
 * Component object
 */
export class Component {

    /**
     * @member {JQuery<HTMLElement>}
     * @protected
     */
    protected _element: JQuery;

    /**
     * Component constructor
     * @param {ComponentOptions} opt
     */
    public constructor(opt?: ComponentOptions) {
        if (opt?.element) {
            this._element = opt?.element;
        } else {
            this._element = jQuery('body');
        }

        if (opt?.emptyElement) {
            this.empty();
        }

        if (opt?.children) {
            for (const child of opt.children) {
                this.append(child);
            }
        }
    }

    /**
     * Return the element from the component
     * @returns {JQuery<HTMLElement>}
     */
    public getElement(): JQuery {
        return this._element;
    }

    /**
     * appendTo
     * @param {Component|string} telement
     */
    public appendTo(telement: Component|JQuery|string): void {
        if (telement instanceof Component) {
            this._element.appendTo(telement.getElement());
        } else {
            this._element.appendTo(telement);
        }
    }

    /**
     * append
     * @param {Component|string} telement
     */
    public append(telement: Component|JQuery|string): void {
        if (telement instanceof Component) {
            this._element.append(telement.getElement());
        } else {
            this._element.append(telement);
        }
    }

    /**
     * addClass
     * @param {string} aclass
     */
    public addClass(aclass: string): void {
        this._element.addClass(aclass);
    }

    /**
     * Remove all elements from element
     */
    public empty(): void {
        this._element.empty();
    }

    /**
     * Is an element empty?
     * @param {JQuery<HTMLElement>} element
     * @returns {boolean}
     */
    public static isEmpty(element: JQuery|Component): boolean {
        let tElement = element;

        if (tElement instanceof Component) {
            tElement = tElement.getElement();
        }

        if (tElement.has('*').length > 0) {
            return false;
        }

        const tmp = tElement.html();

        return tmp.length === 0;
    }
}