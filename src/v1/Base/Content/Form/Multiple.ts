import {Element} from '../../Element';
import {SelectOption} from './SelectBottemBorderOnly2';

/**
 * Multiple
 */
export class Multiple extends Element {

    /**
     * Limit
     * @protected
     */
    protected _limit: number = 0;

    /**
     * constructor
     * @param element
     * @param id
     */
    public constructor(element: any, id?: string) {
        super();

        const telement = this._getAnyElement(element);

        let aid: string = '';

        if (id) {
            aid = id;
        }

        this._element = jQuery(`<select class="select2bs4" id="${aid}" multiple="multiple" data-placeholder="Select a State" style="width: 100%;" />`).appendTo(telement);
    }

    /**
     * _reload
     * @protected
     */
    protected _reload(): void {
        this._element.select2({
            theme: 'bootstrap4',
            maximumSelectionLength: this._limit
        });
    }

    /**
     * Set limit
     * @param {number} limit
     */
    public setLimit(limit: number): void {
        this._limit = limit;
        this._reload();
    }

    /**
     * Add value
     * @param {SelectOption} option
     */
    public addValue(option: SelectOption): void {
        jQuery(`<option value="${option.key}">${option.value}</option>`).appendTo(this._element);
        this._reload();
    }

    /**
     * clearValues
     */
    public clearValues(): void {
        this._element.empty();
        this._reload();
    }

    /**
     * setValue
     * @param {any[]} values
     */
    public setValue(values: any[]): void {
        this._element.val(values);
        this._element.trigger('change');
    }

    /**
     * getValue
     */
    public getValue(): any[] {
        return this._element.val();
    }

}