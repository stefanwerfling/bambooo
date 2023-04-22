"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = exports.IconFa = void 0;
const Element_1 = require("../../Element");
/**
 * IconFa
 */
var IconFa;
(function (IconFa) {
    IconFa["edit"] = "fa fa-edit";
    IconFa["add"] = "fa fa-plus";
    IconFa["trash"] = "fa fa-trash";
    IconFa["copy"] = "fa fa-copy";
    IconFa["bars"] = "fas fa-bars";
    IconFa["ban"] = "icon fas fa-ban";
    IconFa["info"] = "icon fas fa-info";
    IconFa["alert"] = "icon fas fa-exclamation-triangle";
    IconFa["success"] = "icon fas fa-check";
    IconFa["hockeypuck"] = "fa fa-hockey-puck";
    IconFa["ethernet"] = "fa fa-ethernet";
    IconFa["certificate"] = "fa-file-certificate";
    IconFa["share"] = "fa fa-share";
    IconFa["lock"] = "fa fa-lock";
    IconFa["external_link"] = "fa fa-external-link-alt";
    IconFa["redo"] = "fa fa-redo-alt";
})(IconFa = exports.IconFa || (exports.IconFa = {}));
/**
 * Icon
 */
class Icon extends Element_1.Element {
    /**
     * constructor
     * @param element
     */
    constructor(element, symbol) {
        super();
        const telement = this._getAnyElement(element);
        jQuery(`<i class="fa ${symbol}"></i>`).appendTo(telement);
    }
}
exports.Icon = Icon;
