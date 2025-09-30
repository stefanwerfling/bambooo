import { Component, ComponentType } from '../../Component.js';
/**
 * LineChartInteractiv
 */
export declare class LineChartInteractiv extends Component<HTMLDivElement> {
    /**
     * height
     * @protected
     */
    protected _height: number;
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
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
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
