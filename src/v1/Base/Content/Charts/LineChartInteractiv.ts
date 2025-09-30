import {Component, ComponentType} from '../../Component.js';

/**
 * LineChartInteractiv
 */
export class LineChartInteractiv extends Component<HTMLDivElement> {

    /**
     * height
     * @protected
     */
    protected _height: number = 120;

    /**
     * data
     * @protected
     */
    protected _data: any[] = [];

    /**
     * total points
     * @protected
     */
    protected _totalPoints = 100;

    /**
     * plot
     * @protected
     */
    protected _plot: any;

    /**
     * Constructor
     * @param {ComponentType} element
     */
    public constructor(element: ComponentType) {
        super(jQuery<HTMLDivElement>('<div></div>').appendTo(Component.getAnyElement(element)));
        this._changeSize();

        // @ts-ignore
        this._plot = jQuery.plot(
            this._element,
            [
                {
                    data: []
                }
            ],
            {
                grid: {
                    borderColor: '#f3f3f3',
                    borderWidth: 1,
                    tickColor: '#f3f3f3'
                },
                series: {
                    color: '#3c8dbc',
                    lines: {
                        lineWidth: 2,
                        show: true,
                        fill: true,
                    },
                },
                yaxis: {
                    min: 0,
                    show: true
                },
                xaxis: {
                    min: 0,
                    show: false
                }
            }
        );
    }

    /**
     * _changeSize
     * @protected
     */
    protected _changeSize(): void {
        this._element.css({
            'height': `${this._height}px`,
        });
    }

    /**
     * updateData
     * @param newData
     */
    public updateData(newData: any[]): void {
        if (this._data.length > newData.length) {
            for (let i = 0; i < newData.length; i++) {
                this._data = this._data.slice(1);
            }
        }

        for (const tdata of newData) {
            this._data.push(tdata);
        }

        while (this._data.length > this._totalPoints) {
            this._data = this._data.slice(1);
        }

        const res: any[] = [];

        for (var i = 0; i < this._data.length; ++i) {
            res.push([i, this._data[i]])
        }

        this._plot.setData([res]);
        this._plot.setupGrid(true);
        this._plot.draw();
    }

}