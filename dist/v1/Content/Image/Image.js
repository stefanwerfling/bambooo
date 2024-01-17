"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.ImageType = exports.ImageArt = void 0;
const Element_1 = require("../../Element");
var ImageArt;
(function (ImageArt) {
    ImageArt["base"] = "";
    ImageArt["profile"] = "profile-user-img";
})(ImageArt = exports.ImageArt || (exports.ImageArt = {}));
var ImageType;
(function (ImageType) {
    ImageType["none"] = "";
    ImageType["fluidCircle"] = "img-fluid img-circle";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
/**
 * Image
 */
class Image extends Element_1.Element {
    /**
     * constructor
     * @param element
     * @param url
     * @param art
     * @param type
     * @param alt
     */
    constructor(element, url, art = ImageArt.base, type = ImageType.none, alt) {
        super();
        const telement = this._getAnyElement(element);
        this._element = jQuery('<img />').appendTo(telement);
        this._element.attr('src', url);
        if (alt) {
            this._element.attr('alt', alt);
        }
        this._element.addClass(`${art}`);
        this._element.addClass(`${type}`);
    }
}
exports.Image = Image;
