import { SchemaErrors } from 'vts';
/**
 * SchemaError
 */
export declare class SchemaError extends Error {
    /**
     * Schema errors from validate
     */
    protected _schemaErrors: SchemaErrors;
    /**
     * constructor
     * @param {SchemaErrors} errors
     */
    constructor(errors: SchemaErrors);
    /**
     * Return all errors to a JSON string
     * @returns {string}
     */
    errorsToStr(): string;
}
