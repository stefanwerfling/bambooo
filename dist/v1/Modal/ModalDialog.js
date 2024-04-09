"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalDialog = exports.ModalDialogType = void 0;
const Element_1 = require("../Element");
const LangText_1 = require("../Lang/LangText");
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
     * main element
     * @protected
     */
    _mainElement;
    /**
     * inner element
     * @protected
     */
    _innerElement;
    /**
     * modal content
     * @protected
     */
    _modalContent;
    /**
     * overload
     * @protected
     */
    _overload;
    /**
     * header
     * @protected
     */
    _header;
    /**
     * header title
     * @protected
     */
    _header_title;
    /**
     * header button
     * @protected
     */
    _header_button;
    /**
     * body
     * @protected
     */
    _body;
    /**
     * footer
     * @protected
     */
    _footer;
    /**
     * on close event
     * @protected
     */
    _onClose = null;
    /**
     * constructor
     * @param {Element|any} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    constructor(elementObject, idname, modalType, backdrop = true) {
        super();
        const aElement = this._getAnyElement(elementObject);
        let modalBackdrop = '';
        if (backdrop) {
            modalBackdrop = 'data-backdrop="static"';
        }
        this._mainElement = jQuery(`<div class="modal fade" id="${idname}" ${modalBackdrop}/>`).appendTo(aElement);
        this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._mainElement);
        this._modalContent = jQuery('<div class="modal-content">').appendTo(this._innerElement);
        this._overload = jQuery('<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>').appendTo(this._modalContent);
        this._overload.hide();
        this._header = jQuery('<div class="modal-header"/>').appendTo(this._modalContent);
        this._header_title = jQuery('<h4 class="modal-title" />').appendTo(this._header);
        this._header_button = jQuery('<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
            '<span aria-hidden="true">×</span>' +
            '</button>').appendTo(this._header);
        this._header_button.on('click', async () => {
            this.hide();
            if (this._onClose !== null) {
                await this._onClose(this);
            }
        });
        this._body = jQuery('<div class="modal-body" />').appendTo(this._modalContent);
        this._footer = jQuery('<div class="modal-footer justify-content-between">').appendTo(this._modalContent);
    }
    /**
     * setTitle
     * @param title
     */
    setTitle(title) {
        LangText_1.LangText.addLangText(this._header_title, title);
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
    /**
     * resetValues
     * ovverride for use
     */
    resetValues() { }
    /**
     * addButtonClose
     */
    addButtonClose() {
        const close = jQuery('<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>').appendTo(this._footer);
        close.on('click', async () => {
            this.hide();
            if (this._onClose !== null) {
                await this._onClose(this);
            }
        });
        return close;
    }
    /**
     * addButtonSave
     */
    addButtonSave() {
        return jQuery('<button type="button" class="btn btn-primary">Save</button>').appendTo(this._footer);
    }
    /**
     * showLoading
     */
    showLoading() {
        this._overload.show();
    }
    /**
     * hideLoading
     */
    hideLoading() {
        this._overload.hide();
    }
    /**
     * Set on close event
     * @param {ModalDialogEventFn} onClose
     */
    setOnClose(onClose) {
        this._onClose = onClose;
    }
}
exports.ModalDialog = ModalDialog;
