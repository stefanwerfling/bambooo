/**
 * Set read only interface
 */
export interface IReadOnly {
    /**
     * Set read only
     * @param {boolean} readonly
     */
    setReadOnly(readonly: boolean): void;
    /**
     * Is read only
     */
    isReadOnly(): boolean;
}
