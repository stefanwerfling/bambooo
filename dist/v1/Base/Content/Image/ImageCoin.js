"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageCoin = void 0;
const Component_js_1 = require("../../Component.js");
/**
 * ImageCoin
 */
class ImageCoin extends Component_js_1.Component {
    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} symbol
     */
    constructor(element, symbol) {
        super();
        const tsymbol = symbol.toLowerCase().replace('$', '');
        this._element = jQuery(`<img src="img/currency/${tsymbol}.png" width="36px" height="36px" class="img-circle elevation-2" alt="${tsymbol}">`).appendTo(this._getAnyElement(element));
        this._element.on('error', () => {
            this._element.attr('src', 'img/currency/none.png');
        });
    }
}
exports.ImageCoin = ImageCoin;
