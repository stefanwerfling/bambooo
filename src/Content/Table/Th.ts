import {Element} from '../../Element';
import {Tr} from './Tr';

/**
 * Th
 */
export class Th extends Element {

    /**
     * constructor
     * @param atr
     * @param avalue
     */
    public constructor(atr: Tr, avalue?: any, width?: string) {
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
     * @param avalue
     */
    public addValue(avalue: any): void {
        this._element.append(avalue);
    }

}