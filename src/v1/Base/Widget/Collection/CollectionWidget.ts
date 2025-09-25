import {BClass} from '../../../../Core/BTypes.js';
import {ButtonClass} from '../../Content/Button/ButtonClass.js';
import {Component, ComponentType} from '../../Component.js';
import {ButtonDefault, ButtonDefaultType} from '../../Content/Button/ButtonDefault.js';
import {ICollectionEntryWidget} from './CollectionEntryWidget.js';

/**
 * Collection widget on update event
 */
export enum CollectionWidgetOnUpdateEvent {
    add,
    remove,
    removeAll
}

/**
 * Collection widget on update
 */
export type CollectionWidgetOnUpdate<T> = (event: CollectionWidgetOnUpdateEvent, entry?: T) => void;

/**
 * Collection Widget
 */
export class CollectionWidget<T extends ICollectionEntryWidget, E extends Component> {

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
    protected _objects: T[] = [];

    /**
     * on update event
     * @protected
     */
    protected _onUpdate?: CollectionWidgetOnUpdate<T>;

    /**
     * Constructor
     * @param {} opts
     */
    public constructor(opts: {
        element: ComponentType,
        editable: boolean,
        onContainerObject: (element: ComponentType) => E,
        onBindAddBtn: (element: E) => ComponentType,
        entryClass: BClass<T>
        onUpdate?: CollectionWidgetOnUpdate<T>
    }) {
        this._element = opts.onContainerObject(opts.element);
        this._editable = opts.editable;
        this._entryClass = opts.entryClass;
        this._onUpdate = opts.onUpdate;

        if (this._editable) {
            const bindElement = opts.onBindAddBtn(this._element);

            this._createAddBtn(bindElement);
        }
    }

    protected _createAddBtn(element: ComponentType): void {
        const addBtn = new ButtonDefault(
            element,
            '',
            'fa-plus',
            ButtonClass.tool,
            ButtonDefaultType.none
        );

        addBtn.setOnClickFn(() => {
            this._onClickAdd();
        });
    }

    /**
     * On click add event
     * @protected
     */
    protected _onClickAdd(): void {
        this.addObject(this._createObject(this._entryClass));
    }

    /**
     * Create a new object
     * @protected
     */
    protected _createObject(aClass: BClass<T>): T {
        return new aClass(this, this._editable);
    }

    /**
     * Return the Element from collection
     * @returns {E extends Element}
     */
    public getElement(): E {
        return this._element;
    }

    /**
     * Return the collection size
     * @returns {number}
     */
    public getSize(): number {
        return this._objects.length;
    }

    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    public removeObject(object: T): void {
        this._removeObject(object);

        if (this._onUpdate) {
            this._onUpdate(
                CollectionWidgetOnUpdateEvent.remove,
                object
            );
        }
    }

    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    protected _removeObject(object: T): void {
        for (const [index, tobject] of this._objects.entries()) {
            if (object === tobject) {
                tobject.remove();

                this._objects.splice(index, 1);
                return;
            }
        }
    }

    /**
     * Add an object
     * @param {ICollectionEntryWidget} object
     */
    public addObject(object: T): void {
        this._objects.push(object);

        if (this._onUpdate) {
            this._onUpdate(
                CollectionWidgetOnUpdateEvent.add,
                object
            );
        }
    }

    /**
     * Empty collection element
     * @protected
     */
    protected _emptyCollectionElement(): void {
        this._element.getElement().empty();
    }

    /**
     * removeAll
     */
    public removeAll(): void {
        const objects = this._objects;

        for (const object of objects) {
            this._removeObject(object);
        }

        this._emptyCollectionElement();

        if (this._onUpdate) {
            this._onUpdate(CollectionWidgetOnUpdateEvent.removeAll);
        }
    }

}