import { Element } from '../../Element';
export declare type SwitchChangeFn = (value: any) => void;
export declare class Switch extends Element {
    protected _input: any;
    protected _label: any;
    constructor(element: any, id: string, label?: any);
    setLabel(label: any): void;
    setEnable(enable: boolean): void;
    isEnable(): boolean;
    setChangeFn(onChangeFn: SwitchChangeFn): void;
}
