import {Component, ComponentType} from '../../Component.js';

/**
 * SparkLine
 */
export class SparkLine extends Component<HTMLDivElement> {

    /**
     * Height
     * @protected
     */
    protected _height: number = 70;

    /**
     * Width
     * @protected
     */
    protected _width: number = 240;

    /**
     * Data
     * @protected
     */
    protected _data: number[] = [];

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery<HTMLDivElement>('<div />').appendTo(Component.getAnyElement(element)));
    }

    public addData(value: number): void {
        this._data.push(value);
    }

    /**
     * print
     */
    public print(): void {
        // @ts-ignore
        // eslint-disable-next-line no-undef
        const spark = new Sparkline(this._element[0], {
            width: this._width,
            height: this._height,
            lineColor: '#92c1dc',
            endColor: '#92c1dc'
        });

        spark.draw(this._data);
    }

}