"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockButton = exports.BlockButtonType = void 0;
const Element_1 = require("../../Element");
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
class BlockButton extends Element_1.Element {
    constructor(element, blocktype = BlockButtonType.Block) {
        super();
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
        this._element = jQuery(`<button type="button" class="btn ${bclass}"></button>`).appendTo(this._getAnyElement(element));
    }
    setOnClickFn(onClick) {
        this._element.unbind().on('click', () => {
            onClick();
        });
    }
}
exports.BlockButton = BlockButton;
