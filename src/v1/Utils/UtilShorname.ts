
/**
 * UtilShorname
 */
export class UtilShorname {

    /**
     * Return a shortname
     * @param {string} fullname
     * @returns {string}
     */
    public static getShortname(fullname: string): string {
        let shortname = '';

        const fnparts = fullname.split(' ');

        shortname += fnparts[0].substring(0, 1);

        if (fnparts.length > 1) {
            shortname += fnparts[1].substring(0, 1);
        }

        return shortname;
    }
}