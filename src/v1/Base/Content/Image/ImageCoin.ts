import {Component, ComponentType} from '../../Component.js';

/**
 * ImageCoin
 */
export class ImageCoin extends Component {

    /**
     * constructor
     * @param {ComponentType} element
     * @param {string} symbol
     */
    public constructor(element: ComponentType, symbol: string) {
        super();

        const tsymbol = symbol.toLowerCase().replace('$', '');

        this._element = jQuery(`<img src="img/currency/${tsymbol}.png" width="36px" height="36px" class="img-circle elevation-2" alt="${tsymbol}">`).appendTo(this._getAnyElement(element));
        this._element.on('error', () => {
            this._element.attr('src', 'img/currency/none.png');
        });
    }

}