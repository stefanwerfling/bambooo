"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StepperLinear = void 0;
const Component_js_1 = require("../../Component.js");
const LangText_js_1 = require("./../../../Lang/LangText.js");
const bs_stepper_1 = __importDefault(require("bs-stepper"));
/**
 * Stepper linear
 */
class StepperLinear extends Component_js_1.Component {
    /**
     * Header
     * @protected
     */
    _header;
    /**
     * Content
     * @protected
     */
    _content;
    /**
     * Stepper
     * @protected
     */
    _stepper = null;
    /**
     * Constructor
     * @param {ComponentType} element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="bs-stepper linear" />').appendTo(telement);
        this._header = jQuery('<div class="bs-stepper-header" role="tablist" />').appendTo(this._element);
        this._content = jQuery('<div class="bs-stepper-content" />').appendTo(this._element);
    }
    /**
     * Add a Step
     * @param {string|LangText} label
     * @param {number} stepNumber
     * @returns {jQuery<HTMLDivElement>}
     */
    addStep(label, stepNumber) {
        const unid = this._uniqId();
        const id = `step-${unid}`;
        const idTrigger = `${id}-trigger`;
        if (this._header.children().length > 0) {
            this._header.append('<div class="line"></div>');
        }
        const stepHead = jQuery(`<div class="step" data-target="#${id}" />`).appendTo(this._header);
        const stepBtn = jQuery(`<button type="button" class="step-trigger" role="tab" aria-controls="${id}" id="${idTrigger}" />`).appendTo(stepHead);
        jQuery(`<span class="bs-stepper-circle">${stepNumber}</span>`).appendTo(stepBtn);
        const spanLabel = jQuery(`<span class="bs-stepper-label" />`).appendTo(stepBtn);
        LangText_js_1.LangText.addLangText(spanLabel, label);
        const content = jQuery(`<div id="${id}" class="content" role="tabpanel" aria-labelledby="${idTrigger}" />`);
        content.appendTo(this._content);
        return content;
    }
    /**
     * load
     */
    load() {
        this._stepper = new bs_stepper_1.default(this._element[0]);
    }
    /**
     * Next step
     */
    next() {
        if (this._stepper) {
            this._stepper.next();
        }
    }
    /**
     * Previous step
     */
    previous() {
        if (this._stepper) {
            this._stepper.previous();
        }
    }
    /**
     * Step to number
     * @param {number} stepNumber
     */
    stepTo(stepNumber) {
        if (this._stepper) {
            this._stepper.to(stepNumber);
        }
    }
    /**
     * Set the step event
     * @param {StepperLinearStepEventFn} event
     */
    setStepEvent(event) {
        this._element[0].addEventListener('show.bs-stepper', (tevent) => {
            if (tevent.detail && tevent.detail.indexStep) {
                event(tevent.detail.indexStep);
            }
        });
    }
}
exports.StepperLinear = StepperLinear;
