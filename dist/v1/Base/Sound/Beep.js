"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Beep = void 0;
/**
 * Beep
 */
class Beep {
    static RAMP_VALUE = 0.00001;
    static RAMP_DURATION = 1;
    /**
     * Options
     * @protected
     */
    _options;
    /**
     * Context
     * @protected
     */
    _context;
    /**
     * Constructor
     * @param {BeepOptions} options
     */
    constructor(options = {
        frequency: 440,
        interval: 250
    }) {
        // @ts-ignore
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        this._context = new window.AudioContext();
        this._options = options;
    }
    /**
     * Play
     */
    play() {
        const currentTime = this._context.currentTime;
        const osc = this._context.createOscillator();
        const gain = this._context.createGain();
        osc.connect(gain);
        gain.connect(this._context.destination);
        gain.gain.setValueAtTime(gain.gain.value, currentTime);
        gain.gain.exponentialRampToValueAtTime(Beep.RAMP_VALUE, currentTime + Beep.RAMP_DURATION);
        osc.onended = () => {
            gain.disconnect(this._context.destination);
            osc.disconnect(gain);
        };
        osc.type = 'sine';
        osc.frequency.value = this._options.frequency;
        osc.start(currentTime);
        osc.stop(currentTime + Beep.RAMP_DURATION);
    }
    /**
     * Beep
     * @param {number} times
     */
    beep(times = 1) {
        const self = this;
        const interval = this._options.interval;
        ;
        (function loop(i) {
            self.play();
            if (++i < times)
                setTimeout(loop, interval, i);
        })(0);
    }
}
exports.Beep = Beep;
