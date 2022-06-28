define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class SidebarLogo {
        constructor(element) {
            /**
             * image url
             * @private
             */
            this._image = '';
            /**
             * title
             * @private
             */
            this._title = '';
            if (element) {
                this._element = element;
            }
            else {
                throw Error('sidebar logo element not found!');
            }
        }
        getElement() {
            return this._element;
        }
        setImage(url) {
            this._image = url;
            this.render();
        }
        setTitle(title) {
            this._title = title;
            this.render();
        }
        render() {
            this._element.empty();
            this._element.append(`<img src="${this._image}" alt="${this._title}" class="brand-image img-circle elevation-3" style="opacity: .8">`);
            this._element.append(`<span class="brand-text font-weight-light">${this._title}</span>`);
        }
    }
    exports.SidebarLogo = SidebarLogo;
});
//# sourceMappingURL=SidebarLogo.js.map