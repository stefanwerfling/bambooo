import {Component, ComponentType} from '../../Component.js';

/**
 * ButtonGroup
 */
export class ButtonGroup extends Component<HTMLDivElement> {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} addClass
     */
    public constructor(element: ComponentType, addClass?: string) {
        let tclass = '';

        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }

        super(jQuery<HTMLDivElement>(
            `<div class="btn-group ${tclass}" />`
        ).appendTo(
            Component.getAnyElement(element)
        ));
    }

}