/**
 * Component type
 */
export type ComponentType = unknown | Component | JQuery | HTMLElement;
/**
 * Component
 */
export declare class Component {
    /**
     * element (jquery)
     * @protected
     */
    protected _element: JQuery;
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
    getElement(): JQuery;
    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {ComponentType} aelement
     * @return {JQuery}
     * @protected
     */
    static getAnyElement(aelement?: ComponentType): JQuery;
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
    protected _getAnyElement(aelement?: ComponentType): JQuery;
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
    appendTo(telement: Component | string): void;
    /**
     * append
     * @param telement
     */
    append(telement: Component | string): void;
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
