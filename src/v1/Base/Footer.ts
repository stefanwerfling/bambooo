/**
 * Footer
 */
export class Footer {

    /**
     * element
     * @private
     */
    protected _element: JQuery;

    /**
     * Constructor
     * @param {JQuery} element
     */
    public constructor(element?: JQuery) {
        if (element) {
            this._element = element;
        } else {
            this._element = jQuery('.main-footer');
        }

        if (this._element.length === 0) {
            throw Error('footer element not found!');
        }

        jQuery(
            '<strong id="ccc_copyright"></strong>\n' +
            '    All rights reserved.\n' +
            '    <div class="float-right d-none d-sm-inline-block" id="ccc_version">\n' +
            '    </div>'
        ).appendTo(this._element);

    }

}