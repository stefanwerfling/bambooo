"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilShorname = void 0;
/**
 * UtilShorname
 */
class UtilShorname {
    /**
     * Return a shortname
     * @param {string} fullname
     * @returns {string}
     */
    static getShortname(fullname) {
        let shortname = '';
        const fnparts = fullname.split(' ');
        shortname += fnparts[0].substring(0, 1);
        if (fnparts.length > 1) {
            shortname += fnparts[1].substring(0, 1);
        }
        return shortname;
    }
}
exports.UtilShorname = UtilShorname;
