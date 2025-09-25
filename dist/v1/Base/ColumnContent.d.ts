import { Component, ComponentType } from './Component.js';
/**
 * ColumnContent
 */
export declare class ColumnContent extends Component {
    /**
     * Constructor
     * @param {[ComponentType[]]} elements
     * @param {[JQuery]} toElement
     */
    constructor(elements?: ComponentType[], toElement?: JQuery);
    /**
     * add
     * @param {ComponentType} element
     */
    add(element: ComponentType): void;
}
