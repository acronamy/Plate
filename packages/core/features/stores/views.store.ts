import { ViewsStore } from '../schema/views.store.interface';

/**
 * ### viewsStore
 * Keeps track of views, keeps them unique and allows for overlaying.
 * @type Map<mountID, viewPath>
*/
export const viewsStore:ViewsStore = new Map();