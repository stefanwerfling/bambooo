/**
 * UtilNumber
 */
export class UtilNumber {

    /**
     * Convert a string to number
     * @param {string} value
     * @param {number} defaultValue
     * @returns {number}
     */
    public static getNumber(value: string, defaultValue: number = 0): number {
        const num = parseInt(value, 10);

        return isNaN(num) ? defaultValue : num;
    }

}