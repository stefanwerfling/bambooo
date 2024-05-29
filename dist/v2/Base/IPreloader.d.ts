export interface IPreloader {
    /**
     * call when read with loading
     */
    readyLoad(): void;
    /**
     * Set the preloader image
     * @param {string} image
     * @param {string} imageTitle
     */
    setImage(image: string, imageTitle?: string): void;
}
