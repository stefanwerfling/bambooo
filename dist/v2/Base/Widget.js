"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Widget = void 0;
const Component_1 = require("./Component");
/**
 * Widget object
 */
class Widget extends Component_1.Component {
    /**
     * Widget constructor
     * @param {WidgetOptions} opt
     */
    constructor(opt) {
        super(opt);
        if (opt) {
            if (opt.useUnid) {
                if (opt.useUnid.asId) {
                    opt.id = this._uniqId();
                }
                if (opt.useUnid.asName) {
                    opt.name = this._uniqId();
                }
            }
            if (opt.name) {
                this.setName(opt.name);
            }
            if (opt.id) {
                this.setId(opt.id);
            }
            if (opt.class) {
                this.setClass(opt.class);
            }
        }
    }
    /**
     * _uniqId
     * @protected
     * @returns {string}
     */
    _uniqId() {
        const id = Math.round(new Date().getTime() + (Math.random() * 100));
        return `${id}`;
    }
    /**
     * hide
     */
    hide() {
        this._element.hide();
    }
    /**
     * show
     */
    show() {
        this._element.show();
    }
    /**
     * Set the name to the element
     * @param {string} name
     */
    setName(name) {
        this._element.attr('name', name);
    }
    /**
     * Return the name from the element
     * @returns {string|undefined}
     */
    getName() {
        return this._element.attr('name');
    }
    /**
     * Set the id to the element
     * @param id
     */
    setId(id) {
        this._element.attr('id', id);
    }
    /**
     * Return the id from the element
     * @returns {string|undefined}
     */
    getId() {
        return this._element.attr('id');
    }
    /**
     * setClass
     * @param {string|string[]} classes
     */
    setClass(classes) {
        if (Array.isArray(classes)) {
            this._element.addClass(classes.join(' '));
        }
        else {
            this._element.addClass(classes);
        }
    }
}
exports.Widget = Widget;
