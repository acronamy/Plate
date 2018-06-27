import { dirname, join } from "path";
import { readdirSync, statSync, existsSync, lstatSync } from "fs";

/**
 * ### resolveToModule
 * Given a node module, the path to it is extracted.
 * with this path, the second string a path will be apended to it.
 * @param nodeModule {NodeModule} moduleObject
 * @param path {path} string
*/
export function resolveToModule(nodeModule:NodeModule, path:string){
    return join( dirname( nodeModule.id ), path );
}

let base:string;
export function deepFindTemplates(path:string, extname:string, inRecurse?:boolean) {
    let results:string[] = [];
    const files = readdirSync(path);
    if(!inRecurse){
        base = path;
    }
    for(let file of files){
        file = join(path, file);
        let stat = statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(deepFindTemplates(file, extname, true));
        }
        else { 
            results.push(file.replace(base, ""));
        }
    }
    return results;
}