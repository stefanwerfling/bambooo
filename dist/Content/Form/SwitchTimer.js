define(["require", "exports", "./Switch"], function (require, exports, Switch_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SwitchTimer extends Switch_1.Switch {
        constructor(element, id, timeoutSec, label = '') {
            super(element, id, label);
            this._counter = 0;
            this._timeoutFn = null;
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
                clearInterval(this._intervalId);
            }
            this._counter = this._timeoutSec;
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
});
//# sourceMappingURL=SwitchTimer.js.map