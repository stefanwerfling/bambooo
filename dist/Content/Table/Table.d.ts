import { Element } from '../../Element';
export declare class Table extends Element {
    private _thead;
    private _tbody;
    private _tfoot;
    constructor(element: any);
    getThead(): any;
    getTbody(): any;
    getFoot(): any;
}
