define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * SelectBottemBorderOnly2
     */
    class SelectBottemBorderOnly2 extends Element_1.Element {
        /**
         * constructor
         * @param element
         */
        constructor(element) {
            super();
            /**
             * selected value
             * @protected
             */
            this._selectedValue = '';
            this._element = jQuery('<select class="custom-select form-control-border border-width-2" />').appendTo(element);
            // set empty function
            this.setChangeFn(() => { });
        }
        /**
         * setValues
         * @param options
         */
        setValues(options) {
            for (const aoption of options) {
                this.addValue(aoption);
            }
        }
        /**
         * addValue
         * @param option
         */
        addValue(option) {
            let style = '';
            if (option.style) {
                style = `style="${option.style}"`;
            }
            jQuery(`<option ${style} value="${option.key}">${option.value}</option>`).appendTo(this._element);
        }
        /**
         * clearValues
         */
        clearValues() {
            this._element.empty();
        }
        /**
         * setChangeFn
         * @param onChangeFn
         */
        setChangeFn(onChangeFn) {
            this._element.unbind().on('change', () => {
                this._selectedValue = this._element.val();
                onChangeFn(this._selectedValue);
            });
        }
        /**
         * setSelectedValue
         * @param value
         */
        setSelectedValue(value) {
            this._selectedValue = value;
            this._element.val(value).change();
        }
        /**
         * getSelectedValue
         */
        getSelectedValue() {
            return this._selectedValue;
        }
    }
    exports.SelectBottemBorderOnly2 = SelectBottemBorderOnly2;
});
//# sourceMappingURL=SelectBottemBorderOnly2.js.map