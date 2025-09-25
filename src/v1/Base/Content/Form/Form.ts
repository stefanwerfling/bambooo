import {Component, ComponentType} from '../../Component.js';

/**
 * Form
 */
export class Form extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery('<form></form>').appendTo(Component.getAnyElement(element)));
    }

}