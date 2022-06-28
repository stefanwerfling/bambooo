define(["require", "exports", "../Icon/Icon", "./Button"], function (require, exports, Icon_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ButtonMenu
     */
    class ButtonMenu extends Button_1.Button {
        /**
         * constructor
         * @param element
         * @param icon
         * @param positonRight
         */
        constructor(element, icon = null, positonRight = false) {
            const divGrp = jQuery('<div class="btn-group"/>').appendTo(element);
            super(divGrp);
            if (icon !== null) {
                new Icon_1.Icon(this._element, icon);
            }
            this._element.addClass('dropdown-toggle');
            this._element.attr('data-toggle', 'dropdown');
            this._element.attr('aria-expanded', 'false');
            this._divGrp = divGrp;
            this._divDropDownMenu = jQuery('<div class="dropdown-menu"/>').appendTo(this._divGrp);
            if (positonRight) {
                this._divDropDownMenu.addClass('dropdown-menu-right');
            }
        }
        /**
         * addMenuItem
         * @param title
         * @param clickFn
         */
        addMenuItem(title, clickFn, icon = null) {
            const item = jQuery('<a class="dropdown-item" href="#"/>');
            item.appendTo(this._divDropDownMenu);
            if (icon !== null) {
                new Icon_1.Icon(item, icon);
                item.append('&nbsp;');
            }
            item.append(title);
            item.on('click', (event) => {
                clickFn();
                //event.stopPropagation();
                event.preventDefault();
            });
        }
        /**
         * addDivider
         */
        addDivider() {
            jQuery('<div class="dropdown-divider"/>').appendTo(this._divDropDownMenu);
        }
    }
    exports.ButtonMenu = ButtonMenu;
});
//# sourceMappingURL=ButtonMenu.js.map