"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Element = void 0;
/**
 * Element
 */
class Element {
    /**
     * element (jquery)
     * @protected
     */
    _element;
    /**
     * constructor
     * @param aelement
     */
    constructor(aelement) {
        if (aelement) {
            this._element = this._getAnyElement(aelement);
        }
    }
    /**
     * getElement
     * return the main enclosed element
     */
    getElement() {
        return this._element;
    }
    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param aelement
     * @protected
     */
    static getAnyElement(aelement) {
        if (aelement instanceof Element) {
            return aelement.getElement();
        }
        return aelement;
    }
    /**
     * isEmpty
     * @param el
     */
    static isEmpty(el) {
        if (el.has('*').length > 0) {
            return false;
        }
        const tmp = el.html();
        return tmp.length === 0;
    }
    /**
     * _getAnyElement
     * helper for giving an element as any (by jquery)
     * @param aelement
     * @protected
     */
    _getAnyElement(aelement) {
        return Element.getAnyElement(aelement);
    }
    /**
     * hide
     */
    hide() {
        this._element.hide();
    }
    /**
     * show
     */
    show() {
        this._element.show();
    }
    /**
     * appendTo
     * @param telement
     */
    appendTo(telement) {
        if (telement instanceof Element) {
            this._element.appendTo(telement.getElement());
        }
        else {
            this._element.appendTo(telement);
        }
    }
    /**
     * append
     * @param telement
     */
    append(telement) {
        if (telement instanceof Element) {
            this._element.append(telement.getElement());
        }
        else {
            this._element.append(telement);
        }
    }
    /**
     * addClass
     * @param aclass
     */
    addClass(aclass) {
        this._element.addClass(aclass);
    }
    /**
     * setCss
     * @param css
     */
    setCss(css) {
        this._element.css(css);
    }
}
exports.Element = Element;
