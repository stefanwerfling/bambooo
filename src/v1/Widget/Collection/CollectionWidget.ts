import {BClass} from '../../../Core/BTypes';
import {Element} from '../../Element';
import {ButtonClass, ButtonDefault, ButtonDefaultType} from '../../Content/Button/ButtonDefault';
import {ICollectionEntryWidget} from './CollectionEntryWidget';

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
     * Constructor
     * @param {} opts
     */
    public constructor(opts: {
        element: Element|any,
        editable: boolean,
        onContainerObject: (element: Element) => E,
        onBindAddBtn: (element: E) => Element|any,
        entryClass: BClass<T>
    }) {
        this._element = opts.onContainerObject(opts.element);
        this._editable = opts.editable;
        this._entryClass = opts.entryClass;

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
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    public removeObject(object: T): void {
        for (const [index, tobject] of this._objects.entries()) {
            if (object === tobject) {
                tobject.remove();

                this._objects.splice(index, 1);
                return;
            }
        }
    }

    /**
     * removeAll
     */
    public removeAll(): void {
        const objects = this._objects;

        for (const object of objects) {
            this.removeObject(object);
        }
    }

}