/**
 * Help Util for Color
 */
export declare class UtilColor {
    /**
     * Return a color by given text (create a hash and this to color)
     * @param {string} text
     * @returns {string}
     */
    static getColor(text: string): string;
    /**
     * Return the right contrast for given color (black or white)
     * @param {string} hexcolor - With format #000000
     * @returns {string}
     */
    static getContrastYIQ(hexcolor: string): string;
}
