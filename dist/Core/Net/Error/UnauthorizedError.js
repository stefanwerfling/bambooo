"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
/**
 * UnauthorizedError
 */
class UnauthorizedError extends Error {
    /**
     * constructor
     * @param {[string]} message
     */
    constructor(message) {
        let msg = '';
        if (message) {
            msg = message;
        }
        super(msg);
    }
}
exports.UnauthorizedError = UnauthorizedError;
