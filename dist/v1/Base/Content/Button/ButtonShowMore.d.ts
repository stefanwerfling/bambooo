import { Component, ComponentType } from '../../Component.js';
/**
 * ButtonShowMore
 */
export declare class ButtonShowMore extends Component<HTMLTableElement> {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {JQuery} showContent
     * @param {JQuery} hideContent
     */
    constructor(element: ComponentType, showContent: JQuery | string, hideContent: JQuery | string);
}
