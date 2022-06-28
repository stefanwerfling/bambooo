define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Tr extends Element_1.Element {
        constructor(element) {
            super();
            this._element = jQuery('<tr />').appendTo(element);
        }
    }
    exports.Tr = Tr;
});
//# sourceMappingURL=Tr.js.map