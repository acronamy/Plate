
interface ViewDirectory{
    directory:string,
    templates:string[]
}
/**
 * ### viewsStore
 * Keeps track of views, keeps them unique and allows for overlaying.
 * @type Map<mountID, viewPath>
*/
export type ViewsStore = Map<string,ViewDirectory>;