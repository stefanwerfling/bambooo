"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalDialog = exports.ModalDialogType = void 0;
const mobile_detect_1 = __importDefault(require("mobile-detect"));
const ButtonClass_js_1 = require("../Content/Button/ButtonClass.js");
const ButtonDefault_js_1 = require("../Content/Button/ButtonDefault.js");
const Component_js_1 = require("../Component.js");
const LangText_js_1 = require("../../Lang/LangText.js");
/**
 * ModalDialogType
 */
var ModalDialogType;
(function (ModalDialogType) {
    ModalDialogType["small"] = "modal-sm";
    ModalDialogType["large"] = "modal-lg";
    ModalDialogType["xlarge"] = "modal-xl";
})(ModalDialogType || (exports.ModalDialogType = ModalDialogType = {}));
/**
 * ModalDialog
 */
class ModalDialog extends Component_js_1.Component {
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
     * on save event
     * @protected
     */
    _onSave = null;
    /**
     * on hidden event
     * @protected
     */
    _onHidden = null;
    /**
     * Constructor
     * @param {ComponentType} elementObject
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
        this._element = jQuery(`<div class="modal fade" id="${idname}" ${modalBackdrop}/>`).appendTo(aElement);
        this._innerElement = jQuery(`<div class="modal-dialog ${modalType}" />`).appendTo(this._element);
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
        this._element.on('hidden.bs.modal', async () => {
            if (this._onHidden !== null) {
                await this._onHidden(this);
            }
            if (jQuery('.modal.show').length > 0) {
                jQuery('body').addClass('modal-open');
            }
            else {
                jQuery('body').removeClass('modal-open');
            }
        });
        // -------------------------------------------------------------------------------------------------------------
        if (typeof mobile_detect_1.default === 'function') {
            const md = new mobile_detect_1.default(window.navigator.userAgent);
            if (!!md.mobile()) {
                this._innerElement.css({
                    'max-width': '100%',
                    'margin': '15px'
                });
            }
        }
    }
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title) {
        LangText_js_1.LangText.addLangText(this._header_title, title);
    }
    /**
     * getBody
     * @return {JQuery<HTMLDivElement>}
     */
    getBody() {
        return this._body;
    }
    /**
     * getFooter
     * @return {JQuery<HTMLDivElement>}
     */
    getFooter() {
        return this._footer;
    }
    /**
     * show
     */
    show() {
        if (typeof this._element.modal === 'function') {
            this._element.modal('show');
        }
    }
    /**
     * hide
     * @param {[ModalDialogEventFn]} onHidden
     */
    hide(onHidden) {
        if (onHidden) {
            this.setOnHidden(onHidden);
        }
        if (typeof this._element.modal === 'function') {
            this._element.modal('hide');
        }
    }
    /**
     * resetValues
     * ovverride for use
     */
    resetValues() { }
    /**
     * add a close button on footer
     * @param {string|LangText|null} title
     * @returns {ButtonDefault}
     */
    addButtonClose(title = null) {
        if (title === null) {
            title = new LangText_js_1.LangText('Close');
        }
        const closeBtn = new ButtonDefault_js_1.ButtonDefault(this._footer, title, undefined, ButtonClass_js_1.ButtonClass.default, ButtonDefault_js_1.ButtonDefaultType.none, 'data-dismiss="modal"');
        closeBtn.setOnClickFn(async () => {
            this.hide();
            if (this._onClose !== null) {
                await this._onClose(this);
            }
        });
        return closeBtn;
    }
    /**
     * add a save button on footer
     * @param {string|LangText|null} title
     * @param {boolean} showLoading
     * @returns {ButtonDefault}
     */
    addButtonSave(title = null, showLoading = false) {
        if (title === null) {
            title = new LangText_js_1.LangText('Save');
        }
        const saveBtn = new ButtonDefault_js_1.ButtonDefault(this._footer, title, undefined, ButtonClass_js_1.ButtonClass.primary, ButtonDefault_js_1.ButtonDefaultType.none);
        saveBtn.setOnClickFn(async () => {
            if (this._onSave !== null) {
                if (showLoading) {
                    this.showLoading();
                }
                try {
                    await this._onSave(this);
                }
                catch (e) {
                    console.error(e);
                }
                if (showLoading) {
                    this.hideLoading();
                }
            }
        });
        return saveBtn;
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
     * @param {ModalDialogEventFn|null} onClose
     */
    setOnClose(onClose) {
        this._onClose = onClose;
    }
    /**
     * Set on save event
     * @param {ModalDialogEventFn|null} onSave
     */
    setOnSave(onSave) {
        this._onSave = onSave;
    }
    /**
     * Set on hidden
     * @param {ModalDialogEventFn|null} onHidden
     */
    setOnHidden(onHidden) {
        this._onHidden = onHidden;
    }
    /**
     * Destroy
     */
    destroy() {
        this.resetValues();
        const removeIfNoOtherModal = () => {
            if (jQuery('.modal.show').length === 0) {
                jQuery('.modal-backdrop').last().remove();
                jQuery('body')
                    .removeClass('modal-open')
                    .css('padding-right', '');
            }
            this._element.remove();
        };
        if (this._element.hasClass('show')) {
            this._element.one('hidden.bs.modal', removeIfNoOtherModal);
            if (typeof this._element.modal === 'function') {
                this._element.modal('hide');
            }
        }
        else {
            removeIfNoOtherModal();
        }
    }
}
exports.ModalDialog = ModalDialog;
