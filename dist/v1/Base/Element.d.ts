/**
 * Element
 */
export declare class Element {
    /**
     * element (jquery)
     * @protected
     */
    protected _element: any;
    /**
     * constructor
     * @param aelement
     */
    constructor(aelement?: any);
    /**
     * _uniqId
     * @protected
     */
    protected _uniqId(): string;
    /**
     * getElement
     * return the main enclosed element
     */
    getElement(): any;
    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param aelement
     * @protected
     */
    static getAnyElement(aelement?: any): any;
    /**
     * isEmpty
     * @param el
     */
    static isEmpty(el: any): boolean;
    /**
     * _getAnyElement
     * helper for giving an element as any (by jquery)
     * @param aelement
     * @protected
     */
    protected _getAnyElement(aelement?: any): any;
    /**
     * hide
     */
    hide(): void;
    /**
     * show
     */
    show(): void;
    /**
     * appendTo
     * @param telement
     */
    appendTo(telement: Element | string): void;
    /**
     * append
     * @param telement
     */
    append(telement: Element | string): void;
    /**
     * Helper bool class, add or remove a class
     * @param {string} classname
     * @param {boolean} enable
     * @protected
     */
    protected _boolClass(classname: string, enable: boolean): void;
    /**
     * addClass
     * @param aclass
     */
    addClass(aclass: string): void;
    /**
     * setCss
     * @param css
     */
    setCss(css: object): void;
}
