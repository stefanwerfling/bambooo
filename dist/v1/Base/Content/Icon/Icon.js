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
    IconFa["sync"] = "fa fa-sync";
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
    IconFa["calendar"] = "fa fa-calendar";
    IconFa["clock"] = "far fa-clock";
    IconFa["external_link"] = "fa fa-external-link-alt";
    IconFa["book"] = "fa fa-book";
    IconFa["redo"] = "fa fa-redo-alt";
    IconFa["paperclip"] = "fas fa-paperclip";
    IconFa["camera"] = "fas fa-camera";
})(IconFa || (exports.IconFa = IconFa = {}));
/**
 * Icon
 */
class Icon extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param symbol
     */
    constructor(element, symbol) {
        super();
        const telement = this._getAnyElement(element);
        jQuery(`<i class="${symbol}"></i>`).appendTo(telement);
    }
}
exports.Icon = Icon;
