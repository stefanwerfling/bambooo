"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetFetch = void 0;
const HttpError_js_1 = require("./Error/HttpError.js");
const UnknownResponse_js_1 = require("./Error/UnknownResponse.js");
const Response_js_1 = require("./Response.js");
/**
 * NetFetch basic API Rest (JSON) helper
 */
class NetFetch {
    /**
     * Post
     * @param {string} url
     * @param {any} data
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    static async post(url, data, schema, validator, init) {
        const initOpt = init === undefined ? {} : init;
        initOpt['method'] = 'POST';
        initOpt['body'] = JSON.stringify(data);
        return NetFetch._fetch(url, schema, validator, initOpt);
    }
    /**
     * Get
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    static async get(url, schema, validator, init) {
        const initOpt = init === undefined ? {} : init;
        initOpt['method'] = 'GET';
        return NetFetch._fetch(url, schema, validator, initOpt);
    }
    /**
     * Fetch
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param init
     * @private
     */
    static async _fetch(url, schema, validator, init) {
        const initOpt = init;
        // set defaults ------------------------------------------------------------------------------------------------
        initOpt['headers'] = {
            'Content-Type': 'application/json'
        };
        initOpt['mode'] ??= 'cors';
        initOpt['cache'] ??= 'no-cache';
        initOpt['credentials'] ??= 'same-origin';
        initOpt['redirect'] ??= 'follow';
        initOpt['referrerPolicy'] ??= 'no-referrer';
        // request -----------------------------------------------------------------------------------------------------
        const response = await fetch(url, init);
        let rData;
        try {
            rData = await response.json();
        }
        catch (e) {
            if (response.status === 200) {
                throw new UnknownResponse_js_1.UnknownResponse('Json prase error!');
            }
            else {
                console.error(e);
                throw new HttpError_js_1.HttpError(response.statusText, response.status, url);
            }
        }
        Response_js_1.Response.isResponse(schema, rData, validator);
        return rData;
    }
}
exports.NetFetch = NetFetch;
