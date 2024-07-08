"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionWidget = void 0;
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
     * Constructor
     * @param {} opts
     */
    constructor(opts) {
        this._element = opts.onContainerObject(opts.element);
        this._editable = opts.editable;
        this._entryClass = opts.entryClass;
        if (this._editable) {
            const bindElement = opts.onBindAddBtn(this._element);
            this._createAddBtn(bindElement);
        }
    }
    _createAddBtn(element) {
        const addBtn = new ButtonDefault_1.ButtonDefault(element, '', 'fa-plus', ButtonDefault_1.ButtonClass.tool, ButtonDefault_1.ButtonDefaultType.none);
        addBtn.setOnClickFn(() => {
            this._onClickAdd();
        });
    }
    /**
     * On click add event
     * @protected
     */
    _onClickAdd() {
        this._objects.push(this._createObject(this._entryClass));
    }
    /**
     * Create a new object
     * @protected
     */
    _createObject(aClass) {
        return new aClass(this, this._editable);
    }
    /**
     * removeAddress
     * @param {ICollectionEntryWidget} object
     */
    removeObject(object) {
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
    removeAll() {
        const objects = this._objects;
        for (const object of objects) {
            this.removeObject(object);
        }
    }
}
exports.CollectionWidget = CollectionWidget;
