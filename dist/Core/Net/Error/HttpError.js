"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
/**
 * HttpError for API Net calls
 */
class HttpError extends Error {
    /**
     * Error status code
     * @protected
     */
    _status = 0;
    /**
     * Url from HTTP error
     * @protected
     */
    _url = '';
    /**
     * constructor
     * @param {string} message
     * @param {number} status
     * @param {string} url
     */
    constructor(message, status, url) {
        super(message);
        this._status = status;
        this._url = url;
    }
    /**
     * Return Error status code
     * @return {number}
     */
    getStatus() {
        return this._status;
    }
    /**
     * Return Url from HTTP error
     * @return {string}
     */
    getUrl() {
        return this._url;
    }
}
exports.HttpError = HttpError;
