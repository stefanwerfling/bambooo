import { Element } from '../../Element';
export declare type ButtonClickFn = () => void;
export declare class Button extends Element {
    constructor(element: any);
    setOnClickFn(onClick: ButtonClickFn): void;
}
