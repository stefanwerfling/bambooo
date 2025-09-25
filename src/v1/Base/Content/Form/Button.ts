import {Component, ComponentType} from '../../Component.js';
import {ButtonClass} from '../Button/ButtonClass.js';

/**
 * ButtonType
 */
export enum ButtonType {
    default = 'default',
    borderless = 'borderless',
    cardCollapse = 'cardCollapse'
}

/**
 * Button Shape
 */
export enum ButtonShape {
    none = '',
    lg = 'btn-lg',
    sm = 'btn-sm',
    xs = 'btn-xs',
    flat = 'btn-flat',
}

/**
 * ButtonClickFn
 */
export type ButtonClickFn = () => void;

/**
 * Button
 */
export class Button extends Component {

    /**
     * click enable
     * @protected
     */
    protected _clickEnable = true;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {ButtonShape|string} shape
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    public constructor(
        element: ComponentType,
        type: ButtonType = ButtonType.default,
        bnClass: ButtonClass = ButtonClass.default,
        shape: ButtonShape|string = ButtonShape.none,
        moreClass: string = '',
        moreAttr: string = '',
    ) {
        super();

        const telement = this._getAnyElement(element);

        switch (type) {
            case ButtonType.borderless:
                this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);
                break;

            case ButtonType.cardCollapse:
                this._element = jQuery(`<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i></button>`).appendTo(telement);
                break;

            default:
                this._element = jQuery(`<button type="button" class="btn ${bnClass} ${shape} ${moreClass}" ${moreAttr} />`).appendTo(telement);
        }
    }

    /**
     * setOnClickFn
     * @param {ButtonClickFn} onClick
     */
    public setOnClickFn(onClick: ButtonClickFn): void {
        this._element.unbind().on('click', (): void => {
            if (this._clickEnable) {
                onClick();
            }
        });
    }

    /**
     * setClickEnable
     * @param {boolean} enable
     */
    public setClickEnable(enable: boolean): void {
        this._clickEnable = enable;
    }

    /**
     * setDisabled
     * @param {boolean} disable
     */
    public setDisabled(disable: boolean): void {
        this.setClickEnable(!disable);

        if (disable) {
            this._element.addClass('.disabled');
        } else {
            this._element.removeClass('.disabled');
        }
    }

}