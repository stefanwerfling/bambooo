import { Component, ComponentType } from '../../Component.js';
import { LangText } from './../../../Lang/LangText.js';
import Stepper from 'bs-stepper';
/**
 * Event step event (action by next/prev to step)
 */
export type StepperLinearStepEventFn = (indexStep: number) => void;
/**
 * Stepper linear
 */
export declare class StepperLinear extends Component {
    /**
     * Header
     * @protected
     */
    protected _header: JQuery;
    /**
     * Content
     * @protected
     */
    protected _content: JQuery;
    /**
     * Stepper
     * @protected
     */
    protected _stepper: Stepper | null;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element: ComponentType);
    /**
     * Add a Step
     * @param {string|LangText} label
     * @param {number} stepNumber
     * @returns {JQuery}
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
