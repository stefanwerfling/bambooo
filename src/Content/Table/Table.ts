import {Element} from '../../Element';

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
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<table class="table table-hover text-nowrap"/>').appendTo(telement);
        this._thead = jQuery('<thead />').appendTo(this._element);
        this._tbody = jQuery('<tbody />').appendTo(this._element);
    }

    /**
     * getThead
     */
    public getThead(): any {
        return this._thead;
    }

    /**
     * getTbody
     */
    public getTbody(): any {
        return this._tbody;
    }

    /**
     * getFoot
     */
    public getFoot(): any {
        if (this._tfoot === null) {
            this._tfoot = jQuery('<tfoot />').appendTo(this._element);
        }

        return this._tfoot;
    }

}