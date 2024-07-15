"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilRedirect = void 0;
/**
 * UtilRedirect
 */
class UtilRedirect {
    /**
     * Redirect to an url
     * @param {string} url
     */
    static redirect(url) {
        window.location.replace(url);
    }
    /**
     * Redirect to a default login page
     * @param {string} loginUrl - Default '/login.html'
     */
    static toLogin(loginUrl = '/login.html') {
        UtilRedirect.redirect(loginUrl);
    }
}
exports.UtilRedirect = UtilRedirect;
