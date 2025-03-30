import {Element} from '../../Element';

/**
 * CircleColor
 */
export enum CircleColor {
    green = 'text-green',
    blue = 'text-blue',
    purple = 'text-purple',
    red = 'text-red',
    orange = 'text-orange',
    yellow = 'text-yellow',
    gray = 'text-gray'
};

/**
 * Circle
 */
export class Circle extends Element {

    /**
     * constructor
     * @param element
     * @param color
     */
    public constructor(element: any, color: CircleColor|string) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery(`<i class="fas fa-circle fa-1x ${color}"></i>`).appendTo(telement);
    }
}