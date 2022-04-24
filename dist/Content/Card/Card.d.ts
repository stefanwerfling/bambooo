import { Element } from '../../Element';
/**
 * Card
 */
export declare class Card extends Element {
    private _header;
    private _title;
    private _tools;
    private _body;
    private _overload;
    constructor(elementObject: Element);
    setTitle(title: string): void;
    getToolsElement(): any;
    getElement(): any;
    showLoading(): void;
    hideLoading(): void;
}
