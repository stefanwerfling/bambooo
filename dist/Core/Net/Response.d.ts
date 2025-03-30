import { Schema } from 'vts';
import { ResponseValidate } from './ResponseValidate.js';
/**
 * Response
 */
export declare class Response {
    static isSchemaValidate<T>(schema: Schema<T>, data: unknown): data is T;
    static isResponse<T>(schema: Schema<T>, data: unknown, validator: ResponseValidate): data is T;
}
