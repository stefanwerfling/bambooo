/**
 * Component type
 */
export type ComponentType = unknown | Component<any> | JQuery | HTMLElement;
/**
 * Component
 */
export declare class Component<T extends HTMLElement> {
    /**
     * element (jquery)
     * @protected
     */
    protected _element: JQuery<T>;
    /**
     * Constructor
     * @param {ComponentType} aElement
     */
    constructor(aElement?: ComponentType);
    /**
     * _uniqId
     * @protected
     */
    protected _uniqId(): string;
    /**
     * Return the main enclosed element
     * @return {JQuery}
     */
    getElement(): JQuery<T>;
    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {ComponentType} aelement
     * @return {JQuery}
     * @protected
     */
    static getAnyElement<E extends HTMLElement>(aelement?: ComponentType): JQuery<E>;
    /**
     * isEmpty
     * @param el
     */
    static isEmpty(el: JQuery): Boolean;
    /**
     * _getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {unknown|JQuery} aelement
     * @return {JQuery}
     * @protected
     */
    protected _getAnyElement<T extends HTMLElement>(aelement?: ComponentType): JQuery<T>;
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
    appendTo(telement: Component<any> | string): void;
    /**
     * append
     * @param telement
     */
    append(telement: Component<any> | string): void;
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
     * @param {Record<string, string | number>} css
     */
    setCss(css: Record<string, string | number>): void;
}
