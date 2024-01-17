"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LineChartInteractiv = void 0;
const Element_1 = require("../../Element");
/**
 * LineChartInteractiv
 */
class LineChartInteractiv extends Element_1.Element {
    /**
     * height
     * @protected
     */
    _height = '120';
    /**
     * data
     * @protected
     */
    _data = [];
    /**
     * total points
     * @protected
     */
    _totalPoints = 100;
    /**
     * plot
     * @protected
     */
    _plot;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div></div>').appendTo(telement);
        this._changeSize();
        // @ts-ignore
        this._plot = jQuery.plot(this._element, [
            {
                data: []
            }
        ], {
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
        });
    }
    /**
     * _changeSize
     * @protected
     */
    _changeSize() {
        this._element.css({
            'height': `${this._height}px`,
        });
    }
    /**
     * updateData
     * @param newData
     */
    updateData(newData) {
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
        const res = [];
        for (var i = 0; i < this._data.length; ++i) {
            res.push([i, this._data[i]]);
        }
        this._plot.setData([res]);
        this._plot.setupGrid(true);
        this._plot.draw();
    }
}
exports.LineChartInteractiv = LineChartInteractiv;
