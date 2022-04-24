"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentHeader = void 0;
class ContentHeader {
    constructor(element) {
        this._title = '';
        if (element) {
            this._element = element;
        }
        else {
            this._element = jQuery('.content-header');
        }
        this._element.append('      <div class="container-fluid">\n' +
            '        <div class="row mb-2">\n' +
            '          <div class="col-sm-6" id="ccc_ch_title">\n' +
            '          </div><!-- /.col -->\n' +
            '          <div class="col-sm-6">\n' +
            // todo
            '          </div><!-- /.col -->\n' +
            '        </div><!-- /.row -->\n' +
            '      </div><!-- /.container-fluid -->');
    }
    getElement() {
        return this._element;
    }
    setTitle(title) {
        this._title = title;
        this._element.find('#ccc_ch_title').append(`<h1 class="m-0">${title}</h1>`);
    }
    getTitle() {
        return this._title;
    }
}
exports.ContentHeader = ContentHeader;
