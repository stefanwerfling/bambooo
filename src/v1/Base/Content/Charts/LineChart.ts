import {Component, ComponentType} from '../../Component.js';

/**
 * LineChart
 */
export class LineChart extends Component {

    /**
     * Height
     * @protected
     */
    protected _height: number = 250;

    /**
     * constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery('<canvas style="max-width: 100%;" />').appendTo(Component.getAnyElement(element)));
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
            'max-height': `${this._height}px`
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