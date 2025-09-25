import {Component, ComponentType} from '../../Component.js';

export enum BlockButtonType {
    Block,
    BlockFlat,
    BlockSmall,
    BlockTool,
    BlockXS
}

export type BlockButtonClickFn = () => void;

/**
 * BlockButton
 */
export class BlockButton extends Component {

    /**
     * Constructor
     * @param {ComponentType} element
     * @param {BlockButtonType} blocktype
     */
    public constructor(element: ComponentType, blocktype: BlockButtonType = BlockButtonType.Block) {
        let bclass = 'btn-default btn-block';

        switch (blocktype) {
            case BlockButtonType.BlockFlat:
                bclass += ' .btn-flat';
                break;

            case BlockButtonType.BlockSmall:
                bclass += ' .btn-sm';
                break;

            case BlockButtonType.BlockTool:
                bclass = ' .btn-tool';
                break;

            case BlockButtonType.BlockXS:
                bclass = ' .btn-xs';
                break;
        }

        super(jQuery(
            `<button type="button" class="btn ${bclass}"></button>`
        ).appendTo(
            Component.getAnyElement(element)
        ));
    }

    /**
     * Set on click
     * @param {BlockButtonClickFn} onClick
     */
    public setOnClickFn(onClick: BlockButtonClickFn): void {
        this._element.unbind().on('click', (): void => {
            onClick();
        });
    }

}