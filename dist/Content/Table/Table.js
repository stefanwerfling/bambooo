"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Table = void 0;
const Element_1 = require("../../Element");
/**
 * Table
 */
class Table extends Element_1.Element {
    /**
     * _thead
     * @private
     */
    _thead;
    /**
     * _tbody
     * @private
     */
    _tbody;
    /**
     * _tfoot
     * @private
     */
    _tfoot = null;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<table class="table table-hover text-nowrap"/>').appendTo(telement);
        this._thead = jQuery('<thead />').appendTo(this._element);
        this._tbody = jQuery('<tbody />').appendTo(this._element);
    }
    /**
     * getThead
     */
    getThead() {
        return this._thead;
    }
    /**
     * getTbody
     */
    getTbody() {
        return this._tbody;
    }
    /**
     * getFoot
     */
    getFoot() {
        if (this._tfoot === null) {
            this._tfoot = jQuery('<tfoot />').appendTo(this._element);
        }
        return this._tfoot;
    }
}
exports.Table = Table;
