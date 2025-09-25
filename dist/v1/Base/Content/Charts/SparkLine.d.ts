import { Component, ComponentType } from '../../Component.js';
/**
 * SparkLine
 */
export declare class SparkLine extends Component {
    /**
     * Height
     * @protected
     */
    protected _height: number;
    /**
     * Width
     * @protected
     */
    protected _width: number;
    /**
     * Data
     * @protected
     */
    protected _data: number[];
    /**
     * constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
    addData(value: number): void;
    /**
     * print
     */
    print(): void;
}
