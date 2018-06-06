/**
 * ### MountConfig  
 * A configuration object to enable various behaviors.
 * - Provide a location to resolve views 
 * - Provide a location to resolve static assets
 * - Define distinct or merge urls at a provided base
*/
interface MountConfig{
    /**
     * Plate needs this file's module object, it is the safest way to get information about this file from the internals of node.
     * The module is absolutely 100% *required* and should be left alone and always included.
     * 
     * @required
    */
    module:NodeModule,
    /**
     * Mounts have a higher preference towards thier own local views directive in order to allow override behaviors.
     * If the views directory or the template is not found, mounts will attempt to fallback to global views.
     * If no absolute path is specified, the path will become absolute but relative to this file
     * Relative path behavior: views => {this-file}/views
     * Absolute path behavior: Anything you set it to be, so be careful!
    */
    views:string[];
    /**
     * ### base
     * Provide a url to attach routes too.
     * @type string
    */
    base:string;
    /**
     * Allows you to inject services, to this mount only, think middleware or plugins and your on the right track. 
    */
    providers?:any[];
}

export {
    MountConfig
}