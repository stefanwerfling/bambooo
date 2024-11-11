"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionWidget = void 0;
const ButtonClass_1 = require("../../Content/Button/ButtonClass");
const ButtonDefault_1 = require("../../Content/Button/ButtonDefault");
/**
 * Collection Widget
 */
class CollectionWidget {
    /**
     * Element
     * @protected
     */
    _element;
    /**
     * editable
     * @protected
     */
    _editable;
    /**
     * Entry class for create object
     * @protected
     */
    _entryClass;
    /**
     * object list
     * @protected
     */
    _objects = [];
    /**
     * on update event
     * @protected
     */
    _onUpdate;
    /**
     * Constructor
     * @param {} opts
     */
    constructor(opts) {
        this._element = opts.onContainerObject(opts.element);
        this._editable = opts.editable;
        this._entryClass = opts.entryClass;
        this._onUpdate = opts.onUpdate;
        if (this._editable) {
            const bindElement = opts.onBindAddBtn(this._element);
            this._createAddBtn(bindElement);
        }
    }
    _createAddBtn(element) {
        const addBtn = new ButtonDefault_1.ButtonDefault(element, '', 'fa-plus', ButtonClass_1.ButtonClass.tool, ButtonDefault_1.ButtonDefaultType.none);
        addBtn.setOnClickFn(() => {
            this._onClickAdd();
        });
    }
    /**
     * On click add event
     * @protected
     */
    _onClickAdd() {
        this.addObject(this._createObject(this._entryClass));
    }
    /**
     * Create a new object
     * @protected
     */
    _createObject(aClass) {
        return new aClass(this, this._editable);
    }
    /**
     * Return the Element from collection
     * @returns {E extends Element}
     */
    getElement() {
        return this._element;
    }
    /**
     * Return the collection size
     * @returns {number}
     */
    getSize() {
        return this._objects.length;
    }
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    removeObject(object) {
        this._removeObject(object);
        if (this._onUpdate) {
            this._onUpdate(object);
        }
    }
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    _removeObject(object) {
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
    addObject(object) {
        this._objects.push(object);
        if (this._onUpdate) {
            this._onUpdate(object);
        }
    }
    /**
     * removeAll
     */
    removeAll() {
        const objects = this._objects;
        for (const object of objects) {
            this._removeObject(object);
        }
        this._element.getElement().empty();
        if (this._onUpdate) {
            this._onUpdate();
        }
    }
}
exports.CollectionWidget = CollectionWidget;
