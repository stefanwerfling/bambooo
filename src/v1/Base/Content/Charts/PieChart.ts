import {Component, ComponentType} from '../../Component.js';

/**
 * PieChart
 */
export class PieChart extends Component<HTMLCanvasElement> {

    /**
     * Height
     * @protected
     */
    protected _height: number = 350;

    /**
     * Width
     * @protected
     */
    protected _width: number = 350;

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery<HTMLCanvasElement>('<canvas />').appendTo(Component.getAnyElement(element)));
        this._changeCanvasSize();
    }

    /**
     * _changeCanvasSize
     * @protected
     */
    protected _changeCanvasSize(): void {
        this._element.css({
            'min-height': `${this._height}px`,
            'height': `${this._height}px`,
            'max-height': `${this._height}px`,
            'min-width': `${this._width}px`,
            'width': `${this._width}px`,
            'max-width': `${this._width}px`
        });
    }

    /**
     * _getContext
     * @protected
     */
    protected _getContext(): CanvasRenderingContext2D | null {
        const canvas = this._element.get(0) as HTMLCanvasElement | undefined;
        return canvas?.getContext('2d') ?? null;
    }

}