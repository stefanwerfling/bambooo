"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormGroupButton = void 0;
const Element_1 = require("../../Element");
/**
 * FormGroupButton
 */
class FormGroupButton extends Element_1.Element {
    /**
     * _subElement
     * @protected
     */
    _subElement;
    /**
     * icon element
     * @protected
     */
    _iconElement;
    /**
     * _click
     * @protected
     */
    _click;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div class="input-group"></div>').appendTo(telement);
        this._subElement = jQuery('<div class="input-group-append"></div>').appendTo(this._element);
        this._subElement.css({
            'cursor': 'pointer'
        });
        this._subElement.on('click', () => {
            if (this._click) {
                this._click();
            }
        });
        this._iconElement = jQuery('<div class="input-group-text"></div>').appendTo(this._subElement);
    }
    /**
     * getButtonElement
     */
    getButtonElement() {
        return this._subElement;
    }
    /**
     * getIconElement
     */
    getIconElement() {
        return this._iconElement;
    }
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick) {
        this._click = onClick;
    }
}
exports.FormGroupButton = FormGroupButton;
