define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ImageCoin
     */
    class ImageCoin extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param symbol
         */
        constructor(element, symbol) {
            super();
            const tsymbol = symbol.toLowerCase().replace('$', '');
            this._element = jQuery(`<img src="img/currency/${tsymbol}.png" width="36px" height="36px" class="img-circle elevation-2" alt="${tsymbol}">`).appendTo(element);
            this._element.on('error', () => {
                this._element.attr('src', 'img/currency/none.png');
            });
        }
    }
    exports.ImageCoin = ImageCoin;
});
//# sourceMappingURL=ImageCoin.js.map