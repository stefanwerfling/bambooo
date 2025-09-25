import { Component, ComponentType } from '../../Component.js';
/**
 * PieChart
 */
export declare class PieChart extends Component {
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
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
    /**
     * _changeCanvasSize
     * @protected
     */
    protected _changeCanvasSize(): void;
    /**
     * _getContext
     * @protected
     */
    protected _getContext(): CanvasRenderingContext2D | null;
}
