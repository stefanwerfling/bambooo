import {Element} from '../../Element';

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
     * constructor
     * @param {any} element
     * @param {ButtonType} type
     */
    public constructor(element: any, type: ButtonType = ButtonType.default) {
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
                this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(telement);
        }
    }

    /**
     * setOnClickFn
     * @param {ButtonClickFn} onClick
     */
    public setOnClickFn(onClick: ButtonClickFn): void {
        this._element.unbind().on('click', (): void => {
            onClick();
        });
    }

}