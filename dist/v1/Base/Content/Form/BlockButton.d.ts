import { Component, ComponentType } from '../../Component.js';
export declare enum BlockButtonType {
    Block = 0,
    BlockFlat = 1,
    BlockSmall = 2,
    BlockTool = 3,
    BlockXS = 4
}
export type BlockButtonClickFn = () => void;
/**
 * BlockButton
 */
export declare class BlockButton extends Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {BlockButtonType} blocktype
     */
    constructor(element: ComponentType, blocktype?: BlockButtonType);
    /**
     * Set on click
     * @param {BlockButtonClickFn} onClick
     */
    setOnClickFn(onClick: BlockButtonClickFn): void;
}
