import { Element } from '../../Element';
import { Tr } from './Tr';
/**
 * Th
 */
export declare class Th extends Element {
    /**
     * constructor
     * @param atr
     * @param avalue
     */
    constructor(atr: Tr, avalue?: any, width?: string);
    /**
     * addValue
     * @param avalue
     */
    addValue(avalue: any): void;
}
