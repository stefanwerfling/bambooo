import {Element} from '../../Element';

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
     */
    public constructor(element: any) {
        super();

        this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(element);
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