import {Element} from './Element';
import {LangText} from './Lang/LangText';

/**
 * Content header
 */
export class ContentHeader {

    private _element: any;

    /**
     * Title
     * @private
     */
    private _title: string|LangText = '';

    public constructor(element?: any) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.content-header');
        }

        this._element.append(
            '      <div class="container-fluid">\n' +
            '        <div class="row mb-2">\n' +
            '          <div class="col-sm-6" id="ch_title">\n' +
            '          </div><!-- /.col -->\n' +
            '          <div class="col-sm-6">\n' +
            // todo
            '          </div><!-- /.col -->\n' +
            '        </div><!-- /.row -->\n' +
            '      </div><!-- /.container-fluid -->'
        );
    }

    /**
     * Return the element
     * @returns {any}
     */
    public getElement(): any {
        return this._element;
    }

    /**
     * Set the title
     * @param {string|LangText} title
     */
    public setTitle(title: string|LangText): void {
        this._title = title;

        const chTitle = this._element.find('#ch_title').empty();
        const h1 = jQuery('<h1 class="m-0"></h1>').appendTo(chTitle);

        const telement = Element.getAnyElement(title);

        h1.append(telement);
    }

    /**
     * Return the content header title
     * @returns {string|LangText}
     */
    public getTitle(): string|LangText {
        return this._title;
    }

}