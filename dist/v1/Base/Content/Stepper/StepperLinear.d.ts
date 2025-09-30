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
export declare class StepperLinear extends Component<HTMLDivElement> {
    /**
     * Header
     * @protected
     */
    protected _header: JQuery<HTMLDivElement>;
    /**
     * Content
     * @protected
     */
    protected _content: JQuery<HTMLDivElement>;
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
     * @returns {jQuery<HTMLDivElement>}
     */
    addStep(label: string | LangText, stepNumber: number): JQuery<HTMLDivElement>;
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
