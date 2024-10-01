import {Element} from '../../Element';

/**
 * ButtonGroup
 */
export class ButtonGroup extends Element {

    /**
     * constructor
     * @param {any|Element} element
     * @param {string} addClass
     */
    public constructor(element: any, addClass?: string) {
        super();

        let tclass = '';

        if (addClass) {
            tclass = `${tclass} ${addClass}`;
        }

        this._element = jQuery(
            `<div class="btn-group ${tclass}" />`
        ).appendTo(
            this._getAnyElement(element)
        );
    }

}