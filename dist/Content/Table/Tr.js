"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tr = void 0;
const Element_1 = require("../../Element");
class Tr extends Element_1.Element {
    constructor(element) {
        super();
        this._element = jQuery('<tr />').appendTo(element);
    }
}
exports.Tr = Tr;
