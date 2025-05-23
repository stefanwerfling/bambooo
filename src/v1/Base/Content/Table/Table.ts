import {Element} from '../../Element';

/**
 * Table Options
 */
export type TableOptions = {
    striped?: boolean;
    hover?: boolean;
    nowrap?: boolean;
};

/**
 * Table
 */
export class Table extends Element {

    /**
     * _thead
     * @private
     */
    private _thead: any;

    /**
     * _tbody
     * @private
     */
    private _tbody: any;

    /**
     * _tfoot
     * @private
     */
    private _tfoot: any = null;

    /**
     * constructor
     * @param {any} element
     * @param {TableOptions} options
     */
    public constructor(element: any, options: TableOptions = {}) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<table class="table"/>').appendTo(telement);

        this.setStyleHover(options.hover !== undefined ? options.hover :  true);
        this.setStyleTextNoWrap(options.nowrap !== undefined ? options.nowrap :  true);

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
    public setStyleStriped(striped: boolean) {
        this._boolClass('table-striped', striped);
    }

    /**
     * Set table style hover
     * @param {boolean} hover
     */
    public setStyleHover(hover: boolean): void {
        this._boolClass('table-hover', hover);
    }

    /**
     * Set table style Text-No-Wrap
     * @param {boolean} noWrap
     */
    public setStyleTextNoWrap(noWrap: boolean): void {
        this._boolClass('text-nowrap', noWrap);
    }

    /**
     * getThead
     * @return {any}
     */
    public getThead(): any {
        return this._thead;
    }

    /**
     * getTbody
     * @return {any}
     */
    public getTbody(): any {
        return this._tbody;
    }

    /**
     * getFoot
     * @return {any}
     */
    public getFoot(): any {
        if (this._tfoot === null) {
            this._tfoot = jQuery('<tfoot />').appendTo(this._element);
        }

        return this._tfoot;
    }

}