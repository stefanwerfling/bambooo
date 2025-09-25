import {ComponentType} from '../../Component.js';
import {Switch} from './Switch';

/**
 * Switch timeout function
 */
export type SwitchTimeoutFn = () => void;

/**
 * Switch timer
 */
export class SwitchTimer extends Switch {

    protected _timeoutSec: number;
    protected _counter: number = 0;
    protected _intervalId: number|null = null;
    protected _labelValue: string;

    protected _timeoutFn: SwitchTimeoutFn|null = null;

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     * @param {number} timeoutSec
     * @param {string} label
     */
    public constructor(element: ComponentType, id: string, timeoutSec: number, label: string = '') {
        super(element, id, label);

        this._timeoutSec = timeoutSec;
        this._labelValue = label;

        this.setChangeFn((value: boolean) => {
            if (value) {
                this._startInterval();
            } else {
                this._stopInterval();
            }
        });
    }

    protected _startInterval(): void {
        if (this._intervalId) {
            // @ts-ignore
            clearInterval(this._intervalId);
        }

        this._counter = this._timeoutSec;

        // @ts-ignore
        this._intervalId = setInterval(() => {
            if (this._counter <= 0) {
                this._counter = this._timeoutSec;

                if (this._timeoutFn !== null) {
                    this._timeoutFn();
                }
            } else {
                this._counter--;
            }

            this.setLabel(`${this._labelValue} ${this._counter}s`);
        }, 1000);
    }

    protected _stopInterval(): void {
        if (this._intervalId) {
            // @ts-ignore
            clearInterval(this._intervalId);
        }
    }

    public setTimeoutFn(onTimeoutFn: SwitchTimeoutFn): void {
        this._timeoutFn = onTimeoutFn;
    }

    public setEnable(enable: boolean): void {
        this._input.prop('checked', enable);

        if (enable) {
            this._startInterval();
        } else {
            this._stopInterval();
        }
    }

}
