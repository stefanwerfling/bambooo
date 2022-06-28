define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * DescriptionBlockBorder
     */
    var DescriptionBlockBorder;
    (function (DescriptionBlockBorder) {
        DescriptionBlockBorder["none"] = "";
        DescriptionBlockBorder["right"] = "border-right";
    })(DescriptionBlockBorder = exports.DescriptionBlockBorder || (exports.DescriptionBlockBorder = {}));
    /**
     * DescriptionBlock
     */
    class DescriptionBlock extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param border
         */
        constructor(element, border = DescriptionBlockBorder.right) {
            super();
            this._element = jQuery(`<div class="description-block ${border}" />`).appendTo(element);
            this._h5 = jQuery('<h5 class="description-header" />').appendTo(this._element);
            this._span = jQuery('<span class="description-text" />').appendTo(this._element);
        }
        /**
         * setHeader
         * @param str
         */
        setHeader(str) {
            this._h5.empty().append(str);
        }
        /**
         * setText
         * @param str
         */
        setText(str) {
            this._span.empty().append(str);
        }
        /**
         * getTextElement
         */
        getTextElement() {
            return this._span;
        }
    }
    exports.DescriptionBlock = DescriptionBlock;
});
//# sourceMappingURL=DescriptionBlock.js.map