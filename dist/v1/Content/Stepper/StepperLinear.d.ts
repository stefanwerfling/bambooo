import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
import Stepper from 'bs-stepper';
/**
 * Stepper linear
 */
export declare class StepperLinear extends Element {
    /**
     * Header
     * @protected
     */
    protected _header: any;
    /**
     * Content
     * @protected
     */
    protected _content: any;
    /**
     * Stepper
     * @protected
     */
    protected _stepper: Stepper | null;
    /**
     * Constructor
     * @param {Element|any} element
     */
    constructor(element: Element | any);
    /**
     * Add a Step
     * @param {string|LangText} label
     * @param {number} circleNumber
     * @returns {any}
     */
    addStep(label: string | LangText, circleNumber: number): any;
    /**
     * load
     */
    load(): void;
    /**
     * Next step
     */
    next(): void;
    /**
     * Previous step
     */
    previous(): void;
}
