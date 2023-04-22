import { Element } from '../../Element';
/**
 * PieChart
 */
export declare class PieChart extends Element {
    protected _height: string;
    protected _width: string;
    /**
     * constructor
     * @param element
     */
    constructor(element: any);
    /**
     * _changeCanvasSize
     * @protected
     */
    protected _changeCanvasSize(): void;
    /**
     * _getContext
     * @protected
     */
    protected _getContext(): any;
}
