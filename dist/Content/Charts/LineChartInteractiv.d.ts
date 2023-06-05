import { Element } from '../../Element';
/**
 * LineChartInteractiv
 */
export declare class LineChartInteractiv extends Element {
    /**
     * height
     * @protected
     */
    protected _height: string;
    /**
     * data
     * @protected
     */
    protected _data: any[];
    /**
     * total points
     * @protected
     */
    protected _totalPoints: number;
    /**
     * plot
     * @protected
     */
    protected _plot: any;
    /**
     * constructor
     * @param element
     */
    constructor(element: any);
    /**
     * _changeSize
     * @protected
     */
    protected _changeSize(): void;
    /**
     * updateData
     * @param newData
     */
    updateData(newData: any[]): void;
}
