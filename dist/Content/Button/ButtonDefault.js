define(["require", "exports", "../../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ButtonDefaultType
     */
    var ButtonDefaultType;
    (function (ButtonDefaultType) {
        ButtonDefaultType["none"] = "";
        ButtonDefaultType["small"] = "btn-sm";
    })(ButtonDefaultType = exports.ButtonDefaultType || (exports.ButtonDefaultType = {}));
    /**
     * ButtonClass
     */
    var ButtonClass;
    (function (ButtonClass) {
        ButtonClass["default"] = "btn-default";
        ButtonClass["info"] = "btn-info";
        ButtonClass["danger"] = "btn-danger";
        ButtonClass["warning"] = "btn-warning";
        ButtonClass["success"] = "btn-success";
        ButtonClass["primary"] = "btn-primary";
        ButtonClass["tool"] = "btn-tool";
    })(ButtonClass = exports.ButtonClass || (exports.ButtonClass = {}));
    /**
     * ButtonDefault
     */
    class ButtonDefault extends Element_1.Element {
        /**
         * constructor
         * @param element
         * @param title
         * @param icon
         * @param bnClass
         * @param bnType
         */
        constructor(element, title, icon, bnClass = ButtonClass.default, bnType = ButtonDefaultType.small) {
            super();
            /**
             * class
             * @protected
             */
            this._class = ButtonClass.default;
            /**
             * title
             * @protected
             */
            this._title = '';
            /**
             * icon
             * @protected
             */
            this._icon = '';
            /**
             * click enable
             * @protected
             */
            this._clickEnable = true;
            this._class = bnClass;
            this._element = jQuery(`<button type="button" class="btn ${bnClass} ${bnType}" />`).appendTo(element);
            this.setValue(title, icon);
        }
        /**
         * setValue
         * @param title
         * @param icon
         */
        setValue(title, icon) {
            if (title) {
                this._title = title;
            }
            if (icon) {
                this._icon = icon;
            }
            this._element.empty();
            if (this._icon !== '') {
                this._element.append(`<i class="fas ${this._icon}" />`);
            }
            if (this._title !== '') {
                if (this._icon !== '') {
                    this._element.append(' ');
                }
                this._element.append(this._title);
            }
        }
        /**
         * setOnClickFn
         * @param onClick
         */
        setOnClickFn(onClick) {
            this._element.unbind().on('click', () => {
                if (this._clickEnable) {
                    onClick();
                }
            });
        }
        /**
         * setClass
         * @param bnClass
         */
        setClass(bnClass = ButtonClass.default) {
            this._element.removeClass(this._class).addClass(bnClass);
            this._class = bnClass;
        }
        /**
         * setClickEnable
         * @param enable
         */
        setClickEnable(enable) {
            this._clickEnable = enable;
        }
    }
    exports.ButtonDefault = ButtonDefault;
});
//# sourceMappingURL=ButtonDefault.js.map