define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SmallBoxBg;
    (function (SmallBoxBg) {
        SmallBoxBg["info"] = "bg-info";
        SmallBoxBg["success"] = "bg-success";
        SmallBoxBg["warrning"] = "bg-warning";
        SmallBoxBg["danger"] = "bg-danger";
    })(SmallBoxBg = exports.SmallBoxBg || (exports.SmallBoxBg = {}));
    class SmallBox extends Element_1.Element {
        constructor(elementObject, bg) {
            super();
            this._bg = null;
            this._element = jQuery('<div class="small-box" />').appendTo(elementObject.getElement());
            if (bg) {
                this.setBoxBg(bg);
            }
            else {
                this.setBoxBg(SmallBoxBg.info);
            }
            this._innerElement = jQuery('<div class="inner" />').appendTo(this._element);
            this._h3Element = jQuery('<h3 />').appendTo(this._innerElement);
            this._pElement = jQuery('<p />').appendTo(this._innerElement);
            this._iconElement = jQuery('<div class="icon" />').appendTo(this._element);
            this._footerElement = jQuery('<a href="#" class="small-box-footer"/>').appendTo(this._element);
        }
        setBoxBg(bg) {
            this._bg = bg;
            this._element.removeClass().addClass(`small-box ${bg}`);
        }
        getBoxBg() {
            return this._bg;
        }
        setH3Text(text) {
            this._h3Element.empty().append(text);
        }
        setH3Sup(text) {
            jQuery(`<sup style="font-size: 20px">${text}</sup>`).appendTo(this._h3Element);
        }
        setText(text) {
            this._pElement.empty().append(text);
        }
        setFootTextLink(text) {
            this._footerElement.empty().append(`${text} <i class="fas fa-arrow-circle-right"></i>`);
        }
        setIcon(iconClass) {
            this._iconElement.empty().append(jQuery(`<i class="ion ${iconClass}" />`));
        }
    }
    exports.SmallBox = SmallBox;
});
//# sourceMappingURL=SmallBox.js.map