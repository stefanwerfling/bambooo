/**
 * Type of Response validate
 */
export type ResponseValidate = {
    isValidate<T>(data: T): data is T;
};