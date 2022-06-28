define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * InputType
     */
    var InputType;
    (function (InputType) {
        InputType["text"] = "text";
        InputType["number"] = "number";
        InputType["range"] = "range";
        InputType["password"] = "password";
    })(InputType = exports.InputType || (exports.InputType = {}));
    /**
     * InputBottemBorderOnly2
     */
    class InputBottemBorderOnly2 extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param id
         * @param type
         */
        constructor(element, id, type = InputType.text) {
            super();
            let aid = '';
            if (!id) {
                aid = id;
            }
            this._element = jQuery(`<input type="${type}" class="form-control form-control-border border-width-2" id="${aid}" placeholder="">`).appendTo(element);
        }
        /**
         * setPlaceholder
         * @param placeholder
         */
        setPlaceholder(placeholder) {
            this._element.attr("placeholder", placeholder);
        }
        /**
         * setValue
         * @param value
         */
        setValue(value) {
            this._element.val(value);
        }
        /**
         * getValue
         */
        getValue() {
            return this._element.val();
        }
        /**
         * setReadOnly
         * @param readonly
         */
        setReadOnly(readonly) {
            if (readonly) {
                this._element.attr('disabled', 'disabled');
            }
            else {
                this._element.removeAttr('disabled');
            }
        }
    }
    exports.InputBottemBorderOnly2 = InputBottemBorderOnly2;
});
//# sourceMappingURL=InputBottemBorderOnly2.js.map