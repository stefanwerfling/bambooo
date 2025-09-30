import { ButtonDefault } from '../Content/Button/ButtonDefault.js';
import { Component, ComponentType } from '../Component.js';
import { LangText } from '../../Lang/LangText.js';
/**
 * ModalDialogType
 */
export declare enum ModalDialogType {
    small = "modal-sm",
    large = "modal-lg",
    xlarge = "modal-xl"
}
/**
 * Modal dialog event
 */
export type ModalDialogEventFn = (dialog: ModalDialog) => Promise<void>;
/**
 * ModalDialog
 */
export declare class ModalDialog extends Component<HTMLDivElement> {
    /**
     * inner element
     * @protected
     */
    protected _innerElement: JQuery<HTMLDivElement>;
    /**
     * modal content
     * @protected
     */
    protected _modalContent: JQuery<HTMLDivElement>;
    /**
     * overload
     * @protected
     */
    protected _overload: JQuery<HTMLDivElement>;
    /**
     * header
     * @protected
     */
    protected _header: JQuery<HTMLDivElement>;
    /**
     * header title
     * @protected
     */
    protected _header_title: JQuery<HTMLHeadingElement>;
    /**
     * header button
     * @protected
     */
    protected _header_button: JQuery<HTMLButtonElement>;
    /**
     * body
     * @protected
     */
    protected _body: JQuery<HTMLDivElement>;
    /**
     * footer
     * @protected
     */
    protected _footer: JQuery<HTMLDivElement>;
    /**
     * on close event
     * @protected
     */
    protected _onClose: ModalDialogEventFn | null;
    /**
     * on save event
     * @protected
     */
    protected _onSave: ModalDialogEventFn | null;
    /**
     * on hidden event
     * @protected
     */
    protected _onHidden: ModalDialogEventFn | null;
    /**
     * Constructor
     * @param {ComponentType} elementObject
     * @param {string} idname
     * @param {ModalDialogType} modalType
     * @param {boolean} backdrop
     */
    constructor(elementObject: ComponentType, idname: string, modalType: ModalDialogType, backdrop?: boolean);
    /**
     * setTitle
     * @param {string|LangText} title
     */
    setTitle(title: string | LangText): void;
    /**
     * getBody
     * @return {JQuery<HTMLDivElement>}
     */
    getBody(): JQuery<HTMLDivElement>;
    /**
     * getFooter
     * @return {JQuery<HTMLDivElement>}
     */
    getFooter(): JQuery<HTMLDivElement>;
    /**
     * show
     */
    show(): void;
    /**
     * hide
     * @param {[ModalDialogEventFn]} onHidden
     */
    hide(onHidden?: ModalDialogEventFn): void;
    /**
     * resetValues
     * ovverride for use
     */
    resetValues(): void;
    /**
     * add a close button on footer
     * @param {string|LangText|null} title
     * @returns {ButtonDefault}
     */
    addButtonClose(title?: string | LangText | null): ButtonDefault;
    /**
     * add a save button on footer
     * @param {string|LangText|null} title
     * @param {boolean} showLoading
     * @returns {ButtonDefault}
     */
    addButtonSave(title?: string | LangText | null, showLoading?: boolean): any;
    /**
     * showLoading
     */
    showLoading(): void;
    /**
     * hideLoading
     */
    hideLoading(): void;
    /**
     * Set on close event
     * @param {ModalDialogEventFn|null} onClose
     */
    setOnClose(onClose: ModalDialogEventFn | null): void;
    /**
     * Set on save event
     * @param {ModalDialogEventFn|null} onSave
     */
    setOnSave(onSave: ModalDialogEventFn | null): void;
    /**
     * Set on hidden
     * @param {ModalDialogEventFn|null} onHidden
     */
    setOnHidden(onHidden: ModalDialogEventFn | null): void;
    /**
     * Destroy
     */
    destroy(): void;
}
