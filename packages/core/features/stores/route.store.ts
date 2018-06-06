import { RouteStore } from '../schema/route.store.interface';

/**
 * ### routeStore
 * Keeps track of routes, keeps them unique and allows for overlaying.
 * @type Map<url, route>
*/
export const routeStore:RouteStore = new Map();