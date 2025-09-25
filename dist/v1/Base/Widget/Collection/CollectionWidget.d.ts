import { BClass } from '../../../../Core/BTypes.js';
import { Component, ComponentType } from '../../Component.js';
import { ICollectionEntryWidget } from './CollectionEntryWidget.js';
/**
 * Collection widget on update event
 */
export declare enum CollectionWidgetOnUpdateEvent {
    add = 0,
    remove = 1,
    removeAll = 2
}
/**
 * Collection widget on update
 */
export type CollectionWidgetOnUpdate<T> = (event: CollectionWidgetOnUpdateEvent, entry?: T) => void;
/**
 * Collection Widget
 */
export declare class CollectionWidget<T extends ICollectionEntryWidget, E extends Component> {
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
    protected _entryClass: BClass<T>;
    /**
     * object list
     * @protected
     */
    protected _objects: T[];
    /**
     * on update event
     * @protected
     */
    protected _onUpdate?: CollectionWidgetOnUpdate<T>;
    /**
     * Constructor
     * @param {} opts
     */
    constructor(opts: {
        element: ComponentType;
        editable: boolean;
        onContainerObject: (element: ComponentType) => E;
        onBindAddBtn: (element: E) => ComponentType;
        entryClass: BClass<T>;
        onUpdate?: CollectionWidgetOnUpdate<T>;
    });
    protected _createAddBtn(element: ComponentType): void;
    /**
     * On click add event
     * @protected
     */
    protected _onClickAdd(): void;
    /**
     * Create a new object
     * @protected
     */
    protected _createObject(aClass: BClass<T>): T;
    /**
     * Return the Element from collection
     * @returns {E extends Element}
     */
    getElement(): E;
    /**
     * Return the collection size
     * @returns {number}
     */
    getSize(): number;
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    removeObject(object: T): void;
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    protected _removeObject(object: T): void;
    /**
     * Add an object
     * @param {ICollectionEntryWidget} object
     */
    addObject(object: T): void;
    /**
     * Empty collection element
     * @protected
     */
    protected _emptyCollectionElement(): void;
    /**
     * removeAll
     */
    removeAll(): void;
}
