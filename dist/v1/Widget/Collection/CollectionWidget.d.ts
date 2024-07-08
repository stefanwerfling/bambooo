import { Element } from '../../Element';
import { ICollectionEntryWidget } from './CollectionEntryWidget';
/**
 * Collection Widget
 */
export declare class CollectionWidget<T extends ICollectionEntryWidget, E extends Element> {
    /**
     * Element
     * @protected
     */
    protected _element: E;
    /**
     * editable
     * @protected
     */
    protected _editable: boolean;
    /**
     * Entry class for create object
     * @protected
     */
    protected _entryClass: {
        new (...args: any[]): T;
    };
    /**
     * object list
     * @protected
     */
    protected _objects: T[];
    /**
     * Constructor
     * @param {} opts
     */
    constructor(opts: {
        element: Element | any;
        editable: boolean;
        onContainerObject: (element: Element) => E;
        onBindAddBtn: (element: E) => Element | any;
        entryClass: {
            new (...args: any[]): T;
        };
    });
    protected _createAddBtn(element: Element): void;
    /**
     * On click add event
     * @protected
     */
    protected _onClickAdd(): void;
    /**
     * Create a new object
     * @protected
     */
    protected _createObject(aClass: {
        new (...args: any[]): T;
    }): T;
    /**
     * Return the Element from collection
     * @returns {E extends Element}
     */
    getElement(): E;
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    removeObject(object: T): void;
    /**
     * removeAll
     */
    removeAll(): void;
}
