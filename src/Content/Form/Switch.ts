import {Element} from '../../Element';

/**
 * SwitchChangeFn
 */
export type SwitchChangeFn = (value: boolean) => void;

/**
 * Switch
 */
export class Switch extends Element {

    /**
     * input
     * @protected
     */
    protected _input: any;

    /**
     * label
     * @protected
     */
    protected _label: any;

    /**
     * constructor
     * @param element
     * @param id
     * @param label
     */
    public constructor(element: any, id: string, label: any = '') {
        super();

        this._element = jQuery('<div class="form-group" />').appendTo(element);

        const control = jQuery('<div class="custom-control custom-switch" />').appendTo(this._element)

        this._input = jQuery(`<input type="checkbox" class="custom-control-input"  id="${id}" />`).appendTo(control);
        this._label = jQuery(`<label class="custom-control-label" for="${id}" />`).appendTo(control);

        this.setLabel(label);
    }

    /**
     * setLabel
     * @param label
     */
    public setLabel(label: any): void {
        this._label.empty().append(label);
    }

    /**
     * setEnable
     * @param enable
     */
    public setEnable(enable: boolean): void {
        this._input.prop('checked', enable);
        this._input.trigger('change');
    }

    /**
     * isEnable
     */
    public isEnable(): boolean {
        return this._input.is(':checked');
    }

    /**
     * setChangeFn
     * @param onChangeFn
     */
    public setChangeFn(onChangeFn: SwitchChangeFn): void {
        this._input.unbind().on('change', (): void => {
            onChangeFn(this.isEnable());
        });
    }

}