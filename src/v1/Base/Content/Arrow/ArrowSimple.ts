import {Component, ComponentType} from '../../Component.js';

export enum ArrowSimpleDirection {
    up = 'up',
    down = 'down',
    left = 'left',
    right = 'right'
}

/**
 * Arrow Simple
 */
export class ArrowSimple extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    public constructor(element: ComponentType, direction: ArrowSimpleDirection, color: string, sizePx: number = 30) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<div />').appendTo(telement);

        this.setOptions(direction, color, sizePx);
    }

    /**
     * Set options
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    public setOptions(direction: ArrowSimpleDirection, color: string, sizePx: number = 30): void {
        this._element.css({
            'width': '0',
            'height': '0',
            'border-top': '',
            'border-bottom': '',
            'border-left': '',
            'border-right': ''
        });

        switch (direction) {
            case ArrowSimpleDirection.up:
                this._element.css({
                    'border-left': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid ${color}`,
                });
                break;

            case ArrowSimpleDirection.down:
                this._element.css({
                    'border-left': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid transparent`,
                    'border-top': `${sizePx}px solid ${color}`,
                });
                break;

            case ArrowSimpleDirection.left:
                this._element.css({
                    'border-top': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid ${color}`,
                });
                break;

            case ArrowSimpleDirection.right:
                this._element.css({
                    'border-top': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid transparent`,
                    'border-left': `${sizePx}px solid ${color}`,
                });
                break;
        }
    }

}