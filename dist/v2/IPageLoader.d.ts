import { IBasePage } from './IBasePage';
/**
 * Interface Page loader
 */
export interface IPageLoader {
    /**
     * Load a page
     * @param {IBasePage} page
     * @returns {boolean}
     */
    load(page: IBasePage): Promise<boolean>;
}
