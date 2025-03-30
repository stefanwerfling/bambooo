"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlSidebar = void 0;
/**
 * ControlSidebar
 */
class ControlSidebar {
    /**
     * element
     * @private
     */
    _element;
    /**
     * constructor
     * @param element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.control-sidebar');
        }
        if (this._element.length === 0) {
            throw Error('control sidebar element not found!');
        }
    }
    /**
     * getElement
     */
    getElement() {
        return this._element;
    }
}
exports.ControlSidebar = ControlSidebar;
