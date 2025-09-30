import {Component, ComponentType} from '../../Component.js';
import {Tr} from './Tr';

/**
 * Td
 */
export class Td extends Component<HTMLTableCellElement> {

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

        this._element = jQuery<HTMLTableCellElement>(`<td ${params}/>`).appendTo(atr.getElement());

        if (avalue) {
            this.addValue(avalue);
        }
    }

    /**
     * Add a value
     * @param {ComponentType|string} avalue
     */
    public addValue(avalue: ComponentType|string): void {
        if (typeof avalue === 'string') {
            this.addText(avalue);
        } else {
            this.addComponent(avalue);
        }
    }

    /**
     * Add a text
     * @param {string} text
     */
    public addText(text: string): void {
        this._element.append(text);
    }

    /**
     * Add component
     * @param {ComponentType} component
     */
    public addComponent(component: ComponentType): void {
        this._element.append(this._getAnyElement(component));
    }

}