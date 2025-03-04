/**
 * BeepOptions
 */
export type BeepOptions = {
    frequency: number;
    interval: number;
};
/**
 * Beep
 */
export declare class Beep {
    static RAMP_VALUE: number;
    static RAMP_DURATION: number;
    /**
     * Options
     * @protected
     */
    protected _options: BeepOptions;
    /**
     * Context
     * @protected
     */
    protected _context: AudioContext;
    /**
     * Constructor
     * @param {BeepOptions} options
     */
    constructor(options?: BeepOptions);
    /**
     * Play
     */
    play(): void;
    /**
     * Beep
     * @param {number} times
     */
    beep(times?: number): void;
}
