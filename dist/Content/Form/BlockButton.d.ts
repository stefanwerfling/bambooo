import { Element } from '../../Element';
export declare enum BlockButtonType {
    Block = 0,
    BlockFlat = 1,
    BlockSmall = 2,
    BlockTool = 3,
    BlockXS = 4
}
export declare type BlockButtonClickFn = () => void;
/**
 * BlockButton
 */
export declare class BlockButton extends Element {
    constructor(element: any, blocktype?: BlockButtonType);
    setOnClickFn(onClick: BlockButtonClickFn): void;
}
