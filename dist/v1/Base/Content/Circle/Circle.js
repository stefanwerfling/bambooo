"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.CircleColor = void 0;
const Component_js_1 = require("../../Component.js");
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
})(CircleColor || (exports.CircleColor = CircleColor = {}));
/**
 * Circle
 */
class Circle extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {CircleColor|string} color
     */
    constructor(element, color) {
        super(jQuery(`<i class="fas fa-circle fa-1x ${color}"></i>`).appendTo(Component_js_1.Component.getAnyElement(element)));
    }
}
exports.Circle = Circle;
