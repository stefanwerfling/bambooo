"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchTimer = void 0;
const Switch_1 = require("./Switch");
class SwitchTimer extends Switch_1.Switch {
    _timeoutSec;
    _counter = 0;
    _intervalId;
    _labelValue;
    _timeoutFn = null;
    constructor(element, id, timeoutSec, label = '') {
        super(element, id, label);
        this._timeoutSec = timeoutSec;
        this._labelValue = label;
        this.setChangeFn((value) => {
            if (value) {
                this._startInterval();
            }
            else {
                this._stopInterval();
            }
        });
    }
    _startInterval() {
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
            }
            else {
                this._counter--;
            }
            this.setLabel(`${this._labelValue} ${this._counter}s`);
        }, 1000);
    }
    _stopInterval() {
        if (this._intervalId) {
            // @ts-ignore
            clearInterval(this._intervalId);
        }
    }
    setTimeoutFn(onTimeoutFn) {
        this._timeoutFn = onTimeoutFn;
    }
    setEnable(enable) {
        this._input.prop('checked', enable);
        if (enable) {
            this._startInterval();
        }
        else {
            this._stopInterval();
        }
    }
}
exports.SwitchTimer = SwitchTimer;
