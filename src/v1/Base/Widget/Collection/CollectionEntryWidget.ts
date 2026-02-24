import {IReadOnly} from '../../../../Core/Interface/IReadOnly.js';

/**
 * Interface collection entry widget
 */
export interface ICollectionEntryWidget extends IReadOnly {

    /**
     * Remove an entry
     */
    remove(): void;

}