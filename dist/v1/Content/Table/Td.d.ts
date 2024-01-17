import { Element } from '../../Element';
import { Tr } from './Tr';
/**
 * Td
 */
export declare class Td extends Element {
    /**
     * constructor
     * @param atr
     * @param avalue
     * @param colspan
     */
    constructor(atr: Tr, avalue?: any, colspan?: number);
    /**
     * addValue
     * @param avalue
     */
    addValue(avalue: any): void;
}
