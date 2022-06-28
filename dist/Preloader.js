define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Preloader {
        constructor(element) {
            this._title = '';
            this._imageUrl = '';
            if (element) {
                this._element = element;
            }
            else {
                this._element = jQuery('.preloader');
            }
        }
        /**
         * getElement
         */
        getElement() {
            return this._element;
        }
        /**
         * setImage
         * @param url
         */
        setImage(url) {
            this._imageUrl = url;
            this._element.empty().append(jQuery(`<img class="animation__shake" src="${this._imageUrl}" alt="${this._title}" height="60" width="60" />`));
        }
        /**
         * setTitle
         * @param title
         */
        setTitle(title) {
            this._title = title;
        }
        /**
         * readyLoad
         */
        readyLoad() {
            this._element.css({
                display: 'none'
            });
        }
    }
    exports.Preloader = Preloader;
});
//# sourceMappingURL=Preloader.js.map