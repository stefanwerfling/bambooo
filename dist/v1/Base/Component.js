"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/**
 * Component
 */
class Component {
    /**
     * element (jquery)
     * @protected
     */
    _element;
    /**
     * Constructor
     * @param {ComponentType} aElement
     */
    constructor(aElement) {
        if (aElement) {
            this._element = this._getAnyElement(aElement);
        }
        else {
            this._element = jQuery('');
        }
    }
    /**
     * _uniqId
     * @protected
     */
    _uniqId() {
        const id = Math.round(new Date().getTime() + (Math.random() * 100));
        return `${id}`;
    }
    /**
     * Return the main enclosed element
     * @return {JQuery}
     */
    getElement() {
        return this._element;
    }
    /**
     * getAnyElement
     * helper for giving an element as any (by jquery)
     * @param {ComponentType} aelement
     * @return {JQuery}
     * @protected
     */
    static getAnyElement(aelement) {
        if (aelement instanceof Component) {
            return aelement.getElement();
        }
        if (aelement instanceof jQuery) {
            return aelement;
        }
        return jQuery(aelement);
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
     * @param {unknown|JQuery} aelement
     * @return {JQuery}
     * @protected
     */
    _getAnyElement(aelement) {
        return Component.getAnyElement(aelement);
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
        if (telement instanceof Component) {
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
        if (telement instanceof Component) {
            this._element.append(telement.getElement());
        }
        else {
            this._element.append(telement);
        }
    }
    /**
     * Helper bool class, add or remove a class
     * @param {string} classname
     * @param {boolean} enable
     * @protected
     */
    _boolClass(classname, enable) {
        if (enable) {
            this._element.addClass(classname);
        }
        else {
            this._element.removeClass(classname);
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
     * @param {Record<string, string | number>} css
     */
    setCss(css) {
        this._element.css(css);
    }
}
exports.Component = Component;
