import { Switch } from './Switch';
export declare type SwitchTimeoutFn = () => void;
export declare class SwitchTimer extends Switch {
    protected _timeoutSec: number;
    protected _counter: number;
    protected _intervalId: any;
    protected _labelValue: any;
    protected _timeoutFn: SwitchTimeoutFn | null;
    constructor(element: any, id: string, timeoutSec: number, label?: any);
    protected _startInterval(): void;
    protected _stopInterval(): void;
    setTimeoutFn(onTimeoutFn: SwitchTimeoutFn): void;
    setEnable(enable: boolean): void;
}
