import { IPageLoader } from './IPageLoader';
/**
 * Interface Base Page
 */
export interface IBasePage {
    /**
     * Set the page loader
     * @param {IPageLoader} loader
     */
    setPageLoader(loader: IPageLoader): void;
    /**
     * Return page name
     * @returns {string}
     */
    getName(): string;
    /**
     * Load content from page
     */
    loadContent(): void;
    /**
     * unload content from page
     */
    unloadContent(): Promise<void>;
}
