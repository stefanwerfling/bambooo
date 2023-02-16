import { Element } from '../../Element';
/**
 * SparkLine
 */
export declare class SparkLine extends Element {
    protected _height: string;
    protected _width: string;
    protected _data: number[];
    /**
     * constructor
     * @param element
     */
    constructor(element: any);
    addData(value: number): void;
    /**
     * print
     */
    print(): void;
}
