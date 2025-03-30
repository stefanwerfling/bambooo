"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaError = void 0;
/**
 * SchemaError
 */
class SchemaError extends Error {
    /**
     * Schema errors from validate
     */
    _schemaErrors;
    /**
     * constructor
     * @param {SchemaErrors} errors
     */
    constructor(errors) {
        super('Schema invalid from server response!');
        this._schemaErrors = errors;
    }
    /**
     * Return all errors to a JSON string
     * @returns {string}
     */
    errorsToStr() {
        return JSON.stringify(this._schemaErrors, null, 2);
    }
}
exports.SchemaError = SchemaError;
