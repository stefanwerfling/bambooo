"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilDownload = void 0;
/**
 * UtilDownload
 */
class UtilDownload {
    /**
     * Create an action to download a file
     * @param {string} url
     * @param {string} filename
     */
    static download(url, filename) {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
    }
}
exports.UtilDownload = UtilDownload;
