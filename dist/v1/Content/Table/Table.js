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
     * @param {any} element
     * @param {TableOptions} options
     */
    constructor(element, options = {}) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<table class="table"/>').appendTo(telement);
        this.setStyleHover(options.hover !== undefined ? options.hover : true);
        this.setStyleTextNoWrap(options.nowrap !== undefined ? options.nowrap : true);
        if (options.striped !== undefined) {
            this.setStyleStriped(options.striped);
        }
        this._thead = jQuery('<thead />').appendTo(this._element);
        this._tbody = jQuery('<tbody />').appendTo(this._element);
    }
    /**
     * Set table style striped
     * @param {boolean} striped
     */
    setStyleStriped(striped) {
        this._boolClass('table-striped', striped);
    }
    /**
     * Set table style hover
     * @param {boolean} hover
     */
    setStyleHover(hover) {
        this._boolClass('table-hover', hover);
    }
    /**
     * Set table style Text-No-Wrap
     * @param {boolean} noWrap
     */
    setStyleTextNoWrap(noWrap) {
        this._boolClass('text-nowrap', noWrap);
    }
    /**
     * getThead
     * @return {any}
     */
    getThead() {
        return this._thead;
    }
    /**
     * getTbody
     * @return {any}
     */
    getTbody() {
        return this._tbody;
    }
    /**
     * getFoot
     * @return {any}
     */
    getFoot() {
        if (this._tfoot === null) {
            this._tfoot = jQuery('<tfoot />').appendTo(this._element);
        }
        return this._tfoot;
    }
}
exports.Table = Table;
