"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCoin = void 0;
const Element_1 = require("../../Element");
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
