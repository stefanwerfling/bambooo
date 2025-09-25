import {Component, ComponentType} from '../../Component.js';

/**
 * TextAlignment
 */
export enum TextAlignment {
    none = '',
    center = 'text-center'
}

/**
 * Text
 */
export class Text extends Component {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {TextAlignment} align
     */
    public constructor(element: ComponentType, align: TextAlignment = TextAlignment.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div />').appendTo(telement);
        this._element.addClass(`${align}`);
    }
}