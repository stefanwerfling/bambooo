"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmallBox = exports.SmallBoxBg = void 0;
const Component_js_1 = require("../../Component.js");
var SmallBoxBg;
(function (SmallBoxBg) {
    SmallBoxBg["info"] = "bg-info";
    SmallBoxBg["success"] = "bg-success";
    SmallBoxBg["warrning"] = "bg-warning";
    SmallBoxBg["danger"] = "bg-danger";
})(SmallBoxBg || (exports.SmallBoxBg = SmallBoxBg = {}));
/**
 * Smallbox
 */
class SmallBox extends Component_js_1.Component {
    /**
     * Small box background
     * @protected
     */
    _bg = null;
    /**
     * Inner element
     * @protected
     */
    _innerElement;
    /**
     * Icon element
     * @protected
     */
    _iconElement;
    /**
     * Footer element
     * @protected
     */
    _footerElement;
    /**
     * h3 Element
     * @protected
     */
    _h3Element;
    /**
     * p Element
     * @protected
     */
    _pElement;
    /**
     * Constructor
     * @param {Component} elementObject
     * @param {SmallBoxBg} bg
     */
    constructor(elementObject, bg) {
        super(jQuery('<div class="small-box" />').appendTo(elementObject.getElement()));
        if (bg) {
            this.setBoxBg(bg);
        }
        else {
            this.setBoxBg(SmallBoxBg.info);
        }
        this._innerElement = jQuery('<div class="inner" />').appendTo(this._element);
        this._h3Element = jQuery('<h3 />').appendTo(this._innerElement);
        this._pElement = jQuery('<p />').appendTo(this._innerElement);
        this._iconElement = jQuery('<div class="icon" />').appendTo(this._element);
        this._footerElement = jQuery('<a href="#" class="small-box-footer"/>').appendTo(this._element);
    }
    /**
     * Set box background
     * @param {SmallBoxBg} bg
     */
    setBoxBg(bg) {
        this._bg = bg;
        this._element.removeClass().addClass(`small-box ${bg}`);
    }
    /**
     * Get box background
     * @return {SmallBoxBg}
     */
    getBoxBg() {
        return this._bg;
    }
    /**
     * Set H3 Text
     * @param {string} text
     */
    setH3Text(text) {
        this._h3Element.empty().append(text);
    }
    /**
     * Set H3 Sup
     * @param {string} text
     */
    setH3Sup(text) {
        jQuery(`<sup style="font-size: 20px">${text}</sup>`).appendTo(this._h3Element);
    }
    /**
     * Set Text
     * @param {string} text
     */
    setText(text) {
        this._pElement.empty().append(text);
    }
    /**
     * Set foot text link
     * @param {string} text
     */
    setFootTextLink(text) {
        this._footerElement.empty().append(`${text} <i class="fas fa-arrow-circle-right"></i>`);
    }
    /**
     * Set Icon
     * @param {string} iconClass
     */
    setIcon(iconClass) {
        this._iconElement.empty().append(jQuery(`<i class="ion ${iconClass}" />`));
    }
}
exports.SmallBox = SmallBox;
