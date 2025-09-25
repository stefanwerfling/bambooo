"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentHeader = void 0;
const Component_js_1 = require("./Component.js");
/**
 * Content header
 */
class ContentHeader {
    /**
     * Element
     * @private
     */
    _element;
    /**
     * Title
     * @private
     */
    _title = '';
    /**
     * constructor
     * @param {[JQuery]} element
     */
    constructor(element) {
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.content-header');
        }
        this._element.append('      <div class="container-fluid">\n' +
            '        <div class="row mb-2">\n' +
            '          <div class="col-sm-6" id="ch_title">\n' +
            '          </div><!-- /.col -->\n' +
            '          <div class="col-sm-6">\n' +
            // todo
            '          </div><!-- /.col -->\n' +
            '        </div><!-- /.row -->\n' +
            '      </div><!-- /.container-fluid -->');
    }
    /**
     * Return the element
     * @returns {JQuery}
     */
    getElement() {
        return this._element;
    }
    /**
     * Set the title
     * @param {string|LangText} title
     */
    setTitle(title) {
        this._title = title;
        const chTitle = this._element.find('#ch_title').empty();
        const h1 = jQuery('<h1 class="m-0"></h1>').appendTo(chTitle);
        const telement = Component_js_1.Component.getAnyElement(title);
        h1.append(telement);
    }
    /**
     * Return the content header title
     * @returns {string|LangText}
     */
    getTitle() {
        return this._title;
    }
}
exports.ContentHeader = ContentHeader;
