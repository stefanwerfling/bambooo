import { Schema } from 'vts';
import { ResponseValidate } from './ResponseValidate.js';
/**
 * NetFetch basic API Rest (JSON) helper
 */
export declare class NetFetch {
    /**
     * Post
     * @param {string} url
     * @param {any} data
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    static post<T>(url: string, data: object, schema: Schema<T>, validator: ResponseValidate, init?: RequestInit): Promise<T>;
    /**
     * Get
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param {RequestInit} init
     * @return {any}
     */
    static get<T>(url: string, schema: Schema<T>, validator: ResponseValidate, init?: RequestInit): Promise<T>;
    /**
     * Fetch
     * @param {string} url
     * @param {Schema} schema
     * @param {ResponseValidate} validator
     * @param init
     * @private
     */
    private static _fetch;
}
