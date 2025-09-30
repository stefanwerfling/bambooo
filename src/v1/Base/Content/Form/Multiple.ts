import {Component, ComponentType} from '../../Component.js';
import {SelectOption} from './SelectBottemBorderOnly2';

/**
 * Multiple
 */
export class Multiple extends Component<HTMLSelectElement> {

    /**
     * Limit
     * @protected
     */
    protected _limit: number = 0;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     */
    public constructor(element: ComponentType, id?: string) {
        super();

        const telement = this._getAnyElement(element);

        let aid: string = '';

        if (id) {
            aid = id;
        }

        this._element = jQuery<HTMLSelectElement>(`<select class="select2bs4" id="${aid}" multiple="multiple" data-placeholder="Select a State" style="width: 100%;" />`).appendTo(telement);
    }

    /**
     * _reload
     * @protected
     */
    protected _reload(): void {
        if (typeof (this._element as any).select2 === 'function') {
            (this._element as any).select2({
                theme: 'bootstrap4',
                maximumSelectionLength: this._limit
            });
        } else {
            console.log('Multiple: Select2 plugin not found!');
        }
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
     * @param {string[]} values
     */
    public setValue(values: string[]): void {
        this._element.val(values);
        this._element.trigger('change');
    }

    /**
     * getValue
     * @return {string[]}
     */
    public getValue(): string[] {
        const val = this._element.val();

        if (Array.isArray(val)) {
            return val as string[];
        }

        if (val == null) {
            return [];
        }

        return [String(val)];
    }

}