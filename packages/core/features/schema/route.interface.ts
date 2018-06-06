import { httpMethod } from "./http.interface";

/**
 * ### RouteConfig  
 * A configuration object to alter a route.
 * - Serve a web page / handle a request
 * - Provide a response to a form submission
*/
export interface RouteConfig{
    /**
     * #### name
     * The automaticly given name of the route. used for internal and debugging.
     * @example ``` mainRoute(){ ... } ``` where `mainRoute` is `name`.
     * @readonly true
    */
    readonly name?:string;
    /**
     * #### method
     * A http method which a route can handle.  
     * Accepts lower or uppercase varients
     * @type string  
     * @example 
     * - get
     * - patch
     * - post
     * - put
     * - delete
    */
    method:httpMethod;
    /**
     * #### [url](https://www.plate.js/api/schema/url)
     * The url to serve at the given resource.  
     * The url can also be augmented by the parent [mount](https://www.plate.js/api/route) or [request parameters](https://www.plate.js/api/request-parameters).
     * @type string
     * @example  
     * - /mount/url
     * - /url
     * - /:param/url
     * - /mount/:param/url
    */
    url?:string;
}