"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ButtonType = void 0;
const Element_1 = require("../../Element");
/**
 * ButtonType
 */
var ButtonType;
(function (ButtonType) {
    ButtonType["default"] = "default";
    ButtonType["borderless"] = "borderless";
    ButtonType["cardCollapse"] = "cardCollapse";
})(ButtonType = exports.ButtonType || (exports.ButtonType = {}));
/**
 * Button
 */
class Button extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param type
     */
    constructor(element, type = ButtonType.default) {
        super();
        const telement = this._getAnyElement(element);
        switch (type) {
            case ButtonType.borderless:
                this._element = jQuery(`<a href="#" class="text-muted"/>`).appendTo(telement);
                break;
            case ButtonType.cardCollapse:
                this._element = jQuery(`<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-plus"></i></button>`).appendTo(telement);
                break;
            default:
                this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(telement);
        }
    }
    /**
     * setOnClickFn
     * @param onClick
     */
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            onClick();
        });
    }
}
exports.Button = Button;
