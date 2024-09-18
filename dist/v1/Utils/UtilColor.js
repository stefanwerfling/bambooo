"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilColor = void 0;
/**
 * Help Util for Color
 */
class UtilColor {
    /**
     * Return a color by given text (create a hash and this to color)
     * @param {string} text
     * @returns {string}
     */
    static getColor(text) {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            // eslint-disable-next-line no-bitwise
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
            // eslint-disable-next-line no-bitwise
            hash &= hash;
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            // eslint-disable-next-line no-bitwise
            const value = (hash >> (i * 8)) & 255;
            color += `00${value.toString(16)}`.substr(-2);
        }
        return color;
    }
    /**
     * Return the right contrast for given color (black or white)
     * @param {unknown} hexcolor - With format #000000
     * @returns {string}
     */
    static getContrastYIQ(hexcolor) {
        if (typeof hexcolor === 'string' && hexcolor.length === 7) {
            const r = parseInt(hexcolor.substring(1, 3), 16);
            const g = parseInt(hexcolor.substring(3, 5), 16);
            const b = parseInt(hexcolor.substring(5, 7), 16);
            const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
            return yiq >= 128 ? 'black' : 'white';
        }
        return 'black';
    }
}
exports.UtilColor = UtilColor;
