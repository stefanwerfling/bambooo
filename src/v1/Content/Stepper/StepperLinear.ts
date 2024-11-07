import {Element} from '../../Element';
import {LangText} from '../../Lang/LangText';
import Stepper from 'bs-stepper';

/**
 * Stepper linear
 */
export class StepperLinear extends Element {

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
    protected _stepper: Stepper|null = null;

    /**
     * Constructor
     * @param {Element|any} element
     */
    public constructor(element: Element|any) {
        super();

        const telement = this._getAnyElement(element);

        this._element = jQuery('<div class="bs-stepper linear" />').appendTo(telement);
        this._header = jQuery('<div class="bs-stepper-header" role="tablist" />').appendTo(this._element);
        this._content = jQuery('<div class="bs-stepper-content" />').appendTo(this._element);
    }

    /**
     * Add a Step
     * @param {string|LangText} label
     * @param {number} circleNumber
     * @returns {any}
     */
    public addStep(label: string|LangText, circleNumber: number): any {
        const unid = this._uniqId();
        const id = `step-${unid}`;
        const idTrigger = `${id}-trigger`;

        if (this._header.children().length > 0) {
            this._header.append('<div class="line"></div>');
        }

        const stepHead = jQuery(`<div class="step" data-target="#${id}" />`).appendTo(this._header);
        const stepBtn = jQuery(`<button type="button" class="step-trigger" role="tab" aria-controls="${id}" id="${idTrigger}" />`).appendTo(stepHead);

        jQuery(`<span class="bs-stepper-circle">${circleNumber}</span>`).appendTo(stepBtn);
        const spanLabel = jQuery(`<span class="bs-stepper-label" />`).appendTo(stepBtn);

        LangText.addLangText(spanLabel, label);

        const content = jQuery(`<div id="${id}" class="content" role="tabpanel" aria-labelledby="${idTrigger}" />`);

        content.appendTo(this._content);

        return content;
    }

    /**
     * load
     */
    public load(): void {
        this._stepper = new Stepper(this._element[0]);
    }

    /**
     * Next step
     */
    public next(): void {
        if (this._stepper) {
            this._stepper.next();
        }
    }

    /**
     * Previous step
     */
    public previous(): void {
        if (this._stepper) {
            this._stepper.previous();
        }
    }
}