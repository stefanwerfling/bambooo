import {Component, ComponentType} from '../../Component.js';
import {Tr} from './Tr';

/**
 * Th
 */
export class Th extends Component {

    /**
     * constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {width} width
     */
    public constructor(atr: Tr, avalue?: ComponentType, width?: string) {
        super();

        this._element = jQuery('<th/>').appendTo(atr.getElement());

        if (width) {
            this._element.css({
                width
            });
        }

        if (avalue) {
            this.addValue(avalue);
        }
    }

    /**
     * addValue
     * @param {ComponentType} avalue
     */
    public addValue(avalue: ComponentType): void {
        const telement = Component.getAnyElement(avalue);
        this._element.append(telement);
    }

}