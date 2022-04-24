"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
class Element {
    constructor(aelement) {
        if (aelement) {
            this._element = aelement;
        }
    }
    getElement() {
        return this._element;
    }
}
exports.Element = Element;
