import {ExtractSchemaResultType, Schema} from 'vts';
import {HttpError} from './Error/HttpError.js';
import {UnknownResponse} from './Error/UnknownResponse.js';
import {Response} from './Response.js';
import {ResponseValidate} from './ResponseValidate.js';

/**
 * NetFetch basic API Rest (JSON) helper
 */
export class NetFetch {

    /**
     * Post
     * @param {string} url
     * @param {any} data
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    public static async post<T>(
        url: string,
        data: object,
        schema: Schema<T>,
        validator: ResponseValidate,
        init?: RequestInit
    ): Promise<T> {
        const initOpt = init === undefined ? {} : init;

        initOpt['method'] = 'POST';
        initOpt['body'] = JSON.stringify(data);

        return NetFetch._fetch<T>(url, schema, validator, initOpt);
    }

    /**
     * Get
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    public static async get<T>(
        url: string,
        schema: Schema<T>,
        validator: ResponseValidate,
        init?: RequestInit
    ): Promise<T> {
        const initOpt = init === undefined ? {} : init;

        initOpt['method'] = 'GET';

        return NetFetch._fetch<T>(url, schema, validator, initOpt);
    }

    /**
     * Fetch
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param init
     * @private
     */
    private static async _fetch<T>(
        url: string,
        schema: Schema<T>,
        validator: ResponseValidate,
        init: RequestInit
    ): Promise<T> {
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

        let rData: any;

        try {
            rData = await response.json();
        } catch (e) {
            if (response.status === 200) {
                throw new UnknownResponse('Json prase error!');
            } else {
                console.error(e);

                throw new HttpError(response.statusText, response.status, url);
            }
        }

        Response.isResponse(schema, rData, validator);

        return rData;
    }
}