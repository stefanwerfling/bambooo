"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoBox = exports.InfoBoxMb = exports.InfoBoxBg = void 0;
const Element_1 = require("../../Element");
const Icon_1 = require("../Icon/Icon");
/**
 * InfoBoxBg
 */
var InfoBoxBg;
(function (InfoBoxBg) {
    InfoBoxBg["none"] = "";
    InfoBoxBg["light"] = "bg-light";
    InfoBoxBg["success"] = "bg-success";
    InfoBoxBg["warning"] = "bg-warning";
    InfoBoxBg["info"] = "bg-info";
})(InfoBoxBg = exports.InfoBoxBg || (exports.InfoBoxBg = {}));
;
/**
 * InfoBoxMb
 */
var InfoBoxMb;
(function (InfoBoxMb) {
    InfoBoxMb["none"] = "";
    InfoBoxMb["mb3"] = "mb-3";
})(InfoBoxMb = exports.InfoBoxMb || (exports.InfoBoxMb = {}));
/**
 * InfoBox
 */
class InfoBox extends Element_1.Element {
    /**
     * infobox content element
     * @protected
     */
    _contentElement = null;
    /**
     * infobox text element
     * @protected
     */
    _textElement = null;
    /**
     * infobox number element
     * @protected
     */
    _numberElement = null;
    /**
     * constructor
     * @param {Element|any} element
     * @param {InfoBoxBg} bg
     * @param {InfoBoxMb} mb
     */
    constructor(element, bg = InfoBoxBg.light, mb = InfoBoxMb.none) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<div class="info-box ${bg} ${mb}"></div>`).appendTo(telement);
    }
    /**
     * setIcon
     * @param symbole
     * @param bg
     */
    setIcon(symbole, bg) {
        const iconBox = jQuery(`<span class="info-box-icon ${bg} elevation-1"></span>`).appendTo(this._element);
        new Icon_1.Icon(iconBox, symbole);
    }
    /**
     * getContentElement
     */
    getContentElement() {
        if (this._contentElement === null) {
            this._contentElement = jQuery('<div class="info-box-content"></div>').appendTo(this._element);
        }
        return this._contentElement;
    }
    /**
     * getTextElement
     */
    getTextElement() {
        if (this._textElement === null) {
            this._textElement = jQuery('<span class="info-box-text"></span>').appendTo(this.getContentElement());
        }
        return this._textElement;
    }
    /**
     * getNumberElement
     */
    getNumberElement() {
        if (this._numberElement === null) {
            this._numberElement = jQuery('<span class="info-box-number"></span>').appendTo(this.getContentElement());
        }
        return this._numberElement;
    }
}
exports.InfoBox = InfoBox;
