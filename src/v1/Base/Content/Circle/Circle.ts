import {Component, ComponentType} from '../../Component.js';

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
}

/**
 * Circle
 */
export class Circle extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CircleColor|string} color
     */
    public constructor(element: ComponentType, color: CircleColor|string) {
        super(jQuery(`<i class="fas fa-circle fa-1x ${color}"></i>`).appendTo(Component.getAnyElement(element)));
    }
}