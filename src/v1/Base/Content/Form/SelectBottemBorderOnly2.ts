import {Component, ComponentType} from '../../Component.js';

/**
 * SelectOption
 */
export type SelectOption = {
  key: string;
  value: string;
  style?: string;
};

/**
 * SelectChangeFn
 */
export type SelectChangeFn = (value: any) => void;

/**
 * SelectBottemBorderOnly2
 */
export class SelectBottemBorderOnly2 extends Component<HTMLSelectElement> {

    /**
     * selected value
     * @protected
     */
    protected _selectedValue: string = '';

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery<HTMLSelectElement>('<select class="custom-select form-control-border border-width-2" />').appendTo(telement);

        // set empty function
        this.setChangeFn(() => {});
    }

    /**
     * setValues
     * @param {SelectOption[]} options
     */
    public setValues(options: SelectOption[]): void {
        for (const aoption of options) {
            this.addValue(aoption);
        }
    }

    /**
     * addValue
     * @param {SelectOption} option
     */
    public addValue(option: SelectOption): void {
        let style = '';

        if (option.style) {
            style = `style="${option.style}"`;
        }

        jQuery(`<option ${style} value="${option.key}">${option.value}</option>`).appendTo(this._element);
    }

    /**
     * Return true when an option has the key
     * @param {string} key
     * @returns {boolean}
     */
    public hasValue(key: string): boolean {
        let result = false;

        this._element.find('option').each((_index: any, element: any) => {
            if (jQuery(element).val() === key) {
                result = true;
            }
        });

        return result;
    }

    /**
     * clearValues
     */
    public clearValues(): void {
        this._element.empty();
    }

    /**
     * setChangeFn
     * @param {SelectChangeFn} onChangeFn
     */
    public setChangeFn(onChangeFn: SelectChangeFn): void {
        this._element.off('change').on('change', () => {
            this._selectedValue = this._element.val() as string;
            onChangeFn(this._selectedValue);
        });
    }

    /**
     * setSelectedValue
     * @param {string} value
     */
    public setSelectedValue(value: string): void {
        this._selectedValue = value;
        this._element.val(value).trigger('change');
    }

    /**
     * getSelectedValue
     * @returns {string}
     */
    public getSelectedValue(): string {
        return this._selectedValue;
    }

}