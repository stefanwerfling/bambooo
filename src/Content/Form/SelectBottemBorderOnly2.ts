import {Element} from '../../Element';

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
export class SelectBottemBorderOnly2 extends Element {

    /**
     * selected value
     * @protected
     */
    protected _selectedValue: string = '';

    /**
     * constructor
     * @param element
     */
    public constructor(element: any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<select class="custom-select form-control-border border-width-2" />').appendTo(telement);

        // set empty function
        this.setChangeFn(() => {});
    }

    /**
     * setValues
     * @param options
     */
    public setValues(options: SelectOption[]): void {
        for (const aoption of options) {
            this.addValue(aoption);
        }
    }

    /**
     * addValue
     * @param option
     */
    public addValue(option: SelectOption): void {
        let style = '';

        if (option.style) {
            style = `style="${option.style}"`;
        }

        jQuery(`<option ${style} value="${option.key}">${option.value}</option>`).appendTo(this._element);
    }

    /**
     * clearValues
     */
    public clearValues(): void {
        this._element.empty();
    }

    /**
     * setChangeFn
     * @param onChangeFn
     */
    public setChangeFn(onChangeFn: SelectChangeFn): void {
        this._element.unbind().on('change', (): void => {
            this._selectedValue = this._element.val();
            onChangeFn(this._selectedValue);
        });
    }

    /**
     * setSelectedValue
     * @param value
     */
    public setSelectedValue(value: string): void {
        this._selectedValue = value;
        this._element.val(value).change();
    }

    /**
     * getSelectedValue
     */
    public getSelectedValue(): string {
        return this._selectedValue;
    }

}