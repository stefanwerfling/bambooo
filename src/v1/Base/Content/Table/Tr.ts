import {Component} from '../../Component.js';
import {Table} from './Table.js';

/**
 * Tr
 */
export class Tr extends Component {

    /**
     * Constructor
     * @param {Table|JQuery} element
     */
    public constructor(element: Table|JQuery) {
        super();

        const telement = this._getAnyElement(element);
        this._element = jQuery('<tr />').appendTo(telement);
    }

}