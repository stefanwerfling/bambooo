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