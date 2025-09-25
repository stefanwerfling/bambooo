"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrowSimple = exports.ArrowSimpleDirection = void 0;
const Component_js_1 = require("../../Component.js");
var ArrowSimpleDirection;
(function (ArrowSimpleDirection) {
    ArrowSimpleDirection["up"] = "up";
    ArrowSimpleDirection["down"] = "down";
    ArrowSimpleDirection["left"] = "left";
    ArrowSimpleDirection["right"] = "right";
})(ArrowSimpleDirection || (exports.ArrowSimpleDirection = ArrowSimpleDirection = {}));
/**
 * Arrow Simple
 */
class ArrowSimple extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    constructor(element, direction, color, sizePx = 30) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<div />').appendTo(telement);
        this.setOptions(direction, color, sizePx);
    }
    /**
     * Set options
     * @param {ArrowSimpleDirection} direction
     * @param {string} color
     * @param {number} sizePx
     */
    setOptions(direction, color, sizePx = 30) {
        this._element.css({
            'width': '0',
            'height': '0',
            'border-top': '',
            'border-bottom': '',
            'border-left': '',
            'border-right': ''
        });
        switch (direction) {
            case ArrowSimpleDirection.up:
                this._element.css({
                    'border-left': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid ${color}`,
                });
                break;
            case ArrowSimpleDirection.down:
                this._element.css({
                    'border-left': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid transparent`,
                    'border-top': `${sizePx}px solid ${color}`,
                });
                break;
            case ArrowSimpleDirection.left:
                this._element.css({
                    'border-top': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid transparent`,
                    'border-right': `${sizePx}px solid ${color}`,
                });
                break;
            case ArrowSimpleDirection.right:
                this._element.css({
                    'border-top': `${sizePx}px solid transparent`,
                    'border-bottom': `${sizePx}px solid transparent`,
                    'border-left': `${sizePx}px solid ${color}`,
                });
                break;
        }
    }
}
exports.ArrowSimple = ArrowSimple;
