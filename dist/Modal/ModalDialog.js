define(["require", "exports", "../Element"], function (require, exports, Element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * ModalDialogType
     */
    var ModalDialogType;
    (function (ModalDialogType) {
        ModalDialogType["small"] = "modal-sm";
        ModalDialogType["large"] = "modal-lg";
        ModalDialogType["xlarge"] = "modal-xl";
    })(ModalDialogType = exports.ModalDialogType || (exports.ModalDialogType = {}));
    /**
     * ModalDialog
     */
    class ModalDialog extends Element_1.Element {
        /**
         * constructor
         * @param elementObject
         * @param idname
         * @param modalType
         */
        constructor(elementObject, idname, modalType) {
            super();
            const aElement = this._getAnyElement(elementObject);
            this._mainElement = jQuery(`<div class="modal fade" id="${idname}" />`).appendTo(aElement);
            this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._mainElement);
            this._modalContent = jQuery('<div class="modal-content">').appendTo(this._innerElement);
            this._header = jQuery('<div class="modal-header"/>').appendTo(this._modalContent);
            this._header_title = jQuery('<h4 class="modal-title" />').appendTo(this._header);
            this._header_button = jQuery('<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                '<span aria-hidden="true">×</span>' +
                '</button>').appendTo(this._header);
            this._body = jQuery('<div class="modal-body" />').appendTo(this._modalContent);
            this._footer = jQuery('<div class="modal-footer justify-content-between">').appendTo(this._modalContent);
        }
        /**
         * setTitle
         * @param title
         */
        setTitle(title) {
            this._header_title.empty().append(title);
        }
        /**
         * getBody
         */
        getBody() {
            return this._body;
        }
        /**
         * getFooter
         */
        getFooter() {
            return this._footer;
        }
        /**
         * show
         */
        show() {
            this._mainElement.modal('show');
        }
        /**
         * hide
         */
        hide() {
            this._mainElement.modal('hide');
        }
    }
    exports.ModalDialog = ModalDialog;
});
//# sourceMappingURL=ModalDialog.js.map