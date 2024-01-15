import {Element} from '../../Element';

/**
 * ButtonType
 */
export enum ButtonType {
    default = 'default',
    borderless = 'borderless'
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
     * @param element
     * @param type
     */
    public constructor(element: any, type: ButtonType = ButtonType.default) {
        super();

        const telement = this._getAnyElement(element);

        switch (type) {
            case ButtonType.borderless:
                this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);
                break;

            default:
                this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(telement);
        }
    }

    /**
     * setOnClickFn
     * @param onClick
     */
    public setOnClickFn(onClick: ButtonClickFn): void {
        this._element.unbind().on('click', (): void => {
            onClick();
        });
    }

}