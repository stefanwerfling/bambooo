import {Component, ComponentType} from '../../Component.js';

/**
 * Form
 */
export class Form extends Component<HTMLFormElement> {

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery<HTMLFormElement>('<form></form>').appendTo(Component.getAnyElement(element)));
    }

}