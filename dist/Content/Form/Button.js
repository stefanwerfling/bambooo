define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Button
     */
    class Button extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            this._element = jQuery(`<button type="button" class="btn btn-default"></button>`).appendTo(element);
        }
        /**
         * setOnClickFn
         * @param onClick
         */
        setOnClickFn(onClick) {
            this._element.unbind().on('click', () => {
                onClick();
            });
        }
    }
    exports.Button = Button;
});
//# sourceMappingURL=Button.js.map