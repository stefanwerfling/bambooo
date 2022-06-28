define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * SidebarMenuItem
     */
    class SidebarMenuItem {
        /**
         * constructor
         * @param sidebar
         */
        constructor(sidebar) {
            this._name = 'unknow';
            this._iconClass = 'fa-circle';
            this._liElement = jQuery('<li class="nav-item" />').appendTo(sidebar.getUlElement());
            this._aElement = jQuery('<a href="#" class="nav-link" />').appendTo(this._liElement);
            this._iElement = jQuery('<i />').appendTo(this._aElement);
            this._iElement.addClass(`nav-icon fas ${this._iconClass}`);
            this._pElement = jQuery('<p />').appendTo(this._aElement);
            sidebar.addMenuItem(this);
        }
        /**
         * setSymbolColor
         * @param acolor
         */
        setSymbolColor(acolor) {
            this._iElement.css({
                color: acolor
            });
        }
        /**
         * setActiv
         * @param activ
         */
        setActiv(activ) {
            this._aElement.removeClass().addClass('nav-link');
            if (activ) {
                this._aElement.addClass('active');
            }
        }
        /**
         * setIconClass
         * @param iconClass
         */
        setIconClass(iconClass) {
            this._iconClass = iconClass;
            this._iElement.removeClass().addClass(`nav-icon fas ${this._iconClass}`);
        }
        /**
         * setTitle
         * @param title
         */
        setTitle(title) {
            this._pElement.empty().append(title);
        }
        /**
         * setClick
         * @param onClickFn
         */
        setClick(onClickFn) {
            this._aElement.unbind().on('click', onClickFn);
        }
        /**
         * getLiElement
         */
        getLiElement() {
            return this._liElement;
        }
        /**
         * getPElement
         */
        getPElement() {
            return this._pElement;
        }
        /**
         * setName
         * @param name
         */
        setName(name) {
            this._name = name;
        }
        /**
         * getName
         */
        getName() {
            return this._name;
        }
    }
    exports.SidebarMenuItem = SidebarMenuItem;
});
//# sourceMappingURL=SidebarMenuItem.js.map