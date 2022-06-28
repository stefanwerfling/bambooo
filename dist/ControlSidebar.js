define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ControlSidebar {
        constructor(element) {
            if (element) {
                this._element = element;
            }
            else {
                this._element = jQuery('.control-sidebar');
            }
            if (this._element.length === 0) {
                throw Error('control sidebar element not found!');
            }
        }
        getElement() {
            return this._element;
        }
    }
    exports.ControlSidebar = ControlSidebar;
});
//# sourceMappingURL=ControlSidebar.js.map