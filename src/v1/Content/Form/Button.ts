import {Element} from '../../Element';
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
 * ButtonClickFn
 */
export type ButtonClickFn = () => void;

/**
 * Button
 */
export class Button extends Element {

    /**
     * click enable
     * @protected
     */
    protected _clickEnable = true;

    /**
     * constructor
     * @param {any} element
     * @param {ButtonType} type
     * @param {ButtonClass} bnClass
     * @param {string} moreClass
     * @param {string} moreAttr
     */
    public constructor(
        element: any,
        type: ButtonType = ButtonType.default,
        bnClass: ButtonClass = ButtonClass.default,
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
                this._element = jQuery(`<button type="button" class="btn ${bnClass} ${moreClass}" ${moreAttr} />`).appendTo(telement);
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
}