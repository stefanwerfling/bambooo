import { Element } from '../../Element';
import { LangText } from '../../Lang/LangText';
import Stepper from 'bs-stepper';
/**
 * Event step event (action by next/prev to step)
 */
export type StepperLinearStepEventFn = (indexStep: number) => void;
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
     * @param {number} stepNumber
     * @returns {any}
     */
    addStep(label: string | LangText, stepNumber: number): any;
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
    /**
     * Step to number
     * @param {number} stepNumber
     */
    stepTo(stepNumber: number): void;
    /**
     * Set the step event
     * @param {StepperLinearStepEventFn} event
     */
    setStepEvent(event: StepperLinearStepEventFn): void;
}
