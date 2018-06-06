import { httpMethod } from '../schema/http.interface';
import { RouteConfig } from '../schema/route.interface';

/**
 * ### routeStore
 * Keeps track of routes, keeps them unique and allows for overlaying.
 * @type Map<url, route>
*/
export type RouteStore = Map<string,RouteConfig>;