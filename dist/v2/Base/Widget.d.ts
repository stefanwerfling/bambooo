import { Component, ComponentOptions } from './Component';
/**
 * Widget options
 */
export type WidgetOptions = ComponentOptions & {
    useUnid?: {
        asId?: boolean;
        asName?: boolean;
    };
    class?: string | string[];
    id?: string;
    name?: string;
    visible?: boolean;
};
/**
 * Widget object
 */
export declare class Widget extends Component {
    /**
     * Widget constructor
     * @param {WidgetOptions} opt
     */
    constructor(opt?: WidgetOptions);
    /**
     * _uniqId
     * @protected
     * @returns {string}
     */
    protected _uniqId(): string;
    /**
     * hide
     */
    hide(): void;
    /**
     * show
     */
    show(): void;
    /**
     * Set the name to the element
     * @param {string} name
     */
    setName(name: string): void;
    /**
     * Return the name from the element
     * @returns {string|undefined}
     */
    getName(): string | undefined;
    /**
     * Set the id to the element
     * @param id
     */
    setId(id: string): void;
    /**
     * Return the id from the element
     * @returns {string|undefined}
     */
    getId(): string | undefined;
    /**
     * setClass
     * @param {string|string[]} classes
     */
    setClass(classes: string | string[]): void;
}
