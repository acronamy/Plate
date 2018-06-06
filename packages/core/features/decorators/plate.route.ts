import { RouteConfig } from '../schema/route.interface';
import { routeStore } from '../stores/route.store';


/**
 * ### @Route
 * Decorator used to mark this class method as part of the routing for your app.
 * @param object [RouteConfig](https://www.plate.js/api/schema/routeConfig)
 * @type decorator function
*/
export default function Route( routeConfig:RouteConfig ){ 
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const proto = target.prototype;
        
        routeStore.set(<string>routeConfig.url, routeConfig);

        console.log(routeStore)

        Object.defineProperty('route', proto, {
            writable:false,
            value:Object.seal(routeConfig)
        });
    }
}

