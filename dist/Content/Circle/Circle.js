"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.CircleColor = void 0;
const Element_1 = require("../../Element");
/**
 * CircleColor
 */
var CircleColor;
(function (CircleColor) {
    CircleColor["green"] = "text-green";
    CircleColor["blue"] = "text-blue";
    CircleColor["purple"] = "text-purple";
    CircleColor["red"] = "text-red";
    CircleColor["orange"] = "text-orange";
    CircleColor["yellow"] = "text-yellow";
    CircleColor["gray"] = "text-gray";
})(CircleColor = exports.CircleColor || (exports.CircleColor = {}));
;
/**
 * Circle
 */
class Circle extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param color
     */
    constructor(element, color) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery(`<i class="fas fa-circle fa-1x ${color}"></i>`).appendTo(telement);
    }
}
exports.Circle = Circle;
