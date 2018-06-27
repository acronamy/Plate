import { RouteConfig } from '../schema/route.interface';
import { MountConfig } from '../schema/mount.interface';
import { routeStore } from '../stores/route.store';

const classMountAccessor:string = 'mount';

/**
 * ### @Route
 * Decorator used to mark this class method as part of the routing for your app.
 * @param object [RouteConfig](https://www.plate.js/api/schema/routeConfig)
 * @type decorator function
*/
export default function Route( routeConfig:RouteConfig ){ 
    return function(Target: any, propertyKey: string, descriptor: PropertyDescriptor){
        //required to access this class
        // process.nextTick(()=>{
        //     //console.log(Reflect.getMetadata(classMountAccessor,Target))
        // })
    }
}

