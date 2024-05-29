import { IPreloader } from './IPreloader';
import { MainSidebar } from './MainSidebar';
import { Navbar } from './Navbar/Navbar';
/**
 * Interface of wrapper
 */
export interface IWrapper {
    /**
     * Return the preloader object
     * @returns {IPreloader|null}
     */
    getPreloader(): IPreloader | null;
    /**
     * Return the navbar object
     * @returns {Navbar|null}
     */
    getNavbar(): Navbar | null;
    /**
     * Return the main sidebar
     * @returns {MainSidebar|null}
     */
    getMainSidebar(): MainSidebar | null;
}
