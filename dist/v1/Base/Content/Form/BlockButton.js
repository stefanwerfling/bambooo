"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockButton = exports.BlockButtonType = void 0;
const Component_js_1 = require("../../Component.js");
var BlockButtonType;
(function (BlockButtonType) {
    BlockButtonType[BlockButtonType["Block"] = 0] = "Block";
    BlockButtonType[BlockButtonType["BlockFlat"] = 1] = "BlockFlat";
    BlockButtonType[BlockButtonType["BlockSmall"] = 2] = "BlockSmall";
    BlockButtonType[BlockButtonType["BlockTool"] = 3] = "BlockTool";
    BlockButtonType[BlockButtonType["BlockXS"] = 4] = "BlockXS";
})(BlockButtonType || (exports.BlockButtonType = BlockButtonType = {}));
/**
 * BlockButton
 */
class BlockButton extends Component_js_1.Component {
    /**
     * Constructor
     * @param {ComponentType} element
     * @param {BlockButtonType} blocktype
     */
    constructor(element, blocktype = BlockButtonType.Block) {
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
        super(jQuery(`<button type="button" class="btn ${bclass}"></button>`).appendTo(Component_js_1.Component.getAnyElement(element)));
    }
    /**
     * Set on click
     * @param {BlockButtonClickFn} onClick
     */
    setOnClickFn(onClick) {
        this._element.off('click').on('click', () => {
            onClick();
        });
    }
}
exports.BlockButton = BlockButton;
