import { ComponentType } from '../../Component.js';
import { Switch } from './Switch';
/**
 * Switch timeout function
 */
export type SwitchTimeoutFn = () => void;
/**
 * Switch timer
 */
export declare class SwitchTimer extends Switch {
    protected _timeoutSec: number;
    protected _counter: number;
    protected _intervalId: number | null;
    protected _labelValue: string;
    protected _timeoutFn: SwitchTimeoutFn | null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {string} id
     * @param {number} timeoutSec
     * @param {string} label
     */
    constructor(element: ComponentType, id: string, timeoutSec: number, label?: string);
    protected _startInterval(): void;
    protected _stopInterval(): void;
    setTimeoutFn(onTimeoutFn: SwitchTimeoutFn): void;
    setEnable(enable: boolean): void;
}
