"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilNumber = void 0;
/**
 * UtilNumber
 */
class UtilNumber {
    /**
     * Convert a string to number
     * @param {string} value
     * @param {number} defaultValue
     * @returns {number}
     */
    static getNumber(value, defaultValue = 0) {
        const num = parseInt(value, 10);
        return isNaN(num) ? defaultValue : num;
    }
}
exports.UtilNumber = UtilNumber;
