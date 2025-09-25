"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Progressbar = exports.ProgressbarColor = exports.ProgressbarStyle = void 0;
const Component_js_1 = require("../../Component.js");
const LangText_js_1 = require("./../../../Lang/LangText.js");
/**
 * Progressbar Style
 */
var ProgressbarStyle;
(function (ProgressbarStyle) {
    ProgressbarStyle["none"] = "";
    ProgressbarStyle["sm"] = "progress-sm";
    ProgressbarStyle["xs"] = "progress-xs";
    ProgressbarStyle["xxs"] = "progress-xxs";
})(ProgressbarStyle || (exports.ProgressbarStyle = ProgressbarStyle = {}));
/**
 * Progressbar Color
 */
var ProgressbarColor;
(function (ProgressbarColor) {
    ProgressbarColor["green"] = "bg-green";
    ProgressbarColor["blue"] = "bg-blue";
    ProgressbarColor["red"] = "bg-red";
    ProgressbarColor["yellow"] = "bg-yellow";
})(ProgressbarColor || (exports.ProgressbarColor = ProgressbarColor = {}));
/**
 * Progressbar
 */
class Progressbar extends Component_js_1.Component {
    /**
     * Progressbar div
     * @protected
     */
    _progressbarDiv;
    /**
     * Label percent
     * @protected
     */
    _labelPercent = null;
    /**
     * Label
     * @protected
     */
    _label = null;
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ProgressbarStyle} style
     * @param {ProgressbarColor} color
     * @param {string|null|LangText} label
     */
    constructor(element, style = ProgressbarStyle.sm, color = ProgressbarColor.green, label = new LangText_js_1.LangText('Complete')) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<span></span>').appendTo(telement);
        const progress = jQuery(`<div class="progress ${style}" />`).appendTo(this._element);
        this._progressbarDiv = jQuery(`<div class="progress-bar ${color}" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"> </div>`).appendTo(progress);
        this._progressbarDiv.css({
            width: '0%'
        });
        if (label !== null) {
            this._createLabel(label);
        }
    }
    /**
     * create label
     * @param {string|LangText} label
     * @protected
     */
    _createLabel(label) {
        this._labelPercent = jQuery('<small>').appendTo(this._element);
        this._labelPercent.append('0%');
        this._label = jQuery('<small>').appendTo(this._element);
        const tlabel = this._getAnyElement(label);
        this._label.append(tlabel);
    }
    /**
     * Set percent
     * @param {number} percent
     */
    setPercent(percent) {
        this._progressbarDiv.attr('aria-valuenow', `${percent}`);
        this._progressbarDiv.css({
            width: `${percent}%`
        });
        if (this._labelPercent !== null) {
            this._labelPercent.empty().append(`${percent}%`);
        }
    }
}
exports.Progressbar = Progressbar;
