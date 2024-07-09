import {BClass} from '../../../Core/BTypes';
import {Element} from '../../Element';
import {ButtonClass, ButtonDefault, ButtonDefaultType} from '../../Content/Button/ButtonDefault';
import {ICollectionEntryWidget} from './CollectionEntryWidget';

/**
 * Collection widget on update
 */
export type CollectionWidgetOnUpdate<T> = (entry?: T) => void;

/**
 * Collection Widget
 */
export class CollectionWidget<T extends ICollectionEntryWidget, E extends Element> {

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
        element: Element|any,
        editable: boolean,
        onContainerObject: (element: Element) => E,
        onBindAddBtn: (element: E) => Element|any,
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

    protected _createAddBtn(element: Element): void {
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
        this._objects.push(this._createObject(this._entryClass));
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
            this._onUpdate(object);
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
     * Add object
     * @param {ICollectionEntryWidget} object
     */
    public addObject(object: T): void {
        this._objects.push(object);

        if (this._onUpdate) {
            this._onUpdate(object);
        }
    }

    /**
     * removeAll
     */
    public removeAll(): void {
        const objects = this._objects;

        for (const object of objects) {
            this._removeObject(object);
        }

        if (this._onUpdate) {
            this._onUpdate();
        }
    }

}