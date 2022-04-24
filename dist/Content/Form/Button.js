"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const Element_1 = require("../../Element");
class Button extends Element_1.Element {
    constructor(element) {
        super();
        this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(element);
    }
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            onClick();
        });
    }
}
exports.Button = Button;
