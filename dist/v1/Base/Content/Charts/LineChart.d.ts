import { Component, ComponentType } from '../../Component.js';
/**
 * LineChart
 */
export declare class LineChart extends Component<HTMLCanvasElement> {
    /**
     * Height
     * @protected
     */
    protected _height: number;
    /**
     * constructor
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
