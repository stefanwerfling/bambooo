import {Component, ComponentType} from '../../Component.js';

/**
 * SwitchChangeFn
 */
export type SwitchChangeFn = (value: boolean) => void;

/**
 * Switch
 */
export class Switch extends Component<HTMLDivElement> {

    /**
     * input
     * @protected
     */
    protected _input: JQuery<HTMLInputElement>;

    /**
     * label
     * @protected
     */
    protected _label: JQuery<HTMLLabelElement>;

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} id
     * @param {JQuery|string} label
     */
    public constructor(element: ComponentType, id: string, label: JQuery|string = '') {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery<HTMLDivElement>('<div class="form-group" />').appendTo(telement);

        const control = jQuery('<div class="custom-control custom-switch" />').appendTo(this._element);

        this._input = jQuery<HTMLInputElement>(`<input type="checkbox" class="custom-control-input"  id="${id}" />`).appendTo(control);
        this._label = jQuery<HTMLLabelElement>(`<label class="custom-control-label" for="${id}" />`).appendTo(control);

        this.setLabel(label);
    }

    /**
     * setLabel
     * @param {JQuery|string} label
     */
    public setLabel(label: JQuery|string): void {
        this._label.empty().append(label);
    }

    /**
     * setEnable
     * @param {boolean} enable
     */
    public setEnable(enable: boolean): void {
        this._input.prop('checked', enable);
        this._input.trigger('change');
    }

    /**
     * isEnable
     * @return {boolean}
     */
    public isEnable(): boolean {
        return this._input.is(':checked');
    }

    /**
     * setChangeFn
     * @param {SwitchChangeFn} onChangeFn
     */
    public setChangeFn(onChangeFn: SwitchChangeFn): void {
        this._input.unbind().on('change', (): void => {
            onChangeFn(this.isEnable());
        });
    }

    /**
     * setInativ
     * @param {boolean} inactiv
     */
    public setInativ(inactiv: boolean) {
        if (inactiv) {
            this._input.attr('disabled', 1);
        } else {
            this._input.removeAttr('disabled');
        }
    }
}