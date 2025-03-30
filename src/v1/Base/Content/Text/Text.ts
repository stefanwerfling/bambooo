import {Element} from '../../Element';

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
export class Text extends Element {

    /**
     * constructor
     * @param {any|Element} element
     * @param {TextAlignment} align
     */
    public constructor(element: any|Element, align: TextAlignment = TextAlignment.none) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div />').appendTo(telement);
        this._element.addClass(`${align}`);
    }
}