import {Component, ComponentType} from '../../Component.js';
import {Tr} from './Tr';

/**
 * Td
 */
export class Td extends Component {

    /**
     * Constructor
     * @param {Tr} atr
     * @param {ComponentType} avalue
     * @param {number} colspan
     */
    public constructor(atr: Tr, avalue?: ComponentType, colspan?: number) {
        super();

        let params = '';

        if (colspan) {
            params = `${params} colspan="${colspan}"`;
        }

        this._element = jQuery(`<td ${params}/>`).appendTo(atr.getElement());

        if (avalue) {
            this.addValue(avalue);
        }
    }

    /**
     * addValue
     * @param {ComponentType} avalue
     */
    public addValue(avalue: ComponentType): void {
        const element = this._getAnyElement(avalue);

        this._element.append(element);
    }

}