import { Element } from '../../Element';
/**
 * LineChart
 */
export declare class LineChart extends Element {
    protected _height: string;
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
