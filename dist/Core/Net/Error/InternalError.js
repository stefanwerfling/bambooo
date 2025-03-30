"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InternalError = void 0;
/**
 * InternalError
 */
class InternalError extends Error {
    /**
     * constructor
     * @param {string} message
     */
    constructor(message) {
        super(message);
    }
}
exports.InternalError = InternalError;
