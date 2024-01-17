import { Element } from '../../Element';
export declare enum SmallBoxBg {
    info = "bg-info",
    success = "bg-success",
    warrning = "bg-warning",
    danger = "bg-danger"
}
export declare class SmallBox extends Element {
    private _bg;
    private _innerElement;
    private _iconElement;
    private _footerElement;
    private _h3Element;
    private _pElement;
    constructor(elementObject: Element, bg?: SmallBoxBg);
    setBoxBg(bg: SmallBoxBg): void;
    getBoxBg(): SmallBoxBg;
    setH3Text(text: string): void;
    setH3Sup(text: string): void;
    setText(text: string): void;
    setFootTextLink(text: string): void;
    setIcon(iconClass: string): void;
}
