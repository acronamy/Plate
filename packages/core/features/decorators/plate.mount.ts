import { MountConfig } from '../schema/mount.interface';
import { routeStore } from '../stores/route.store';

/**
 * ### @Mount
 * Decorator used to mark this class as the host of many or one route.
 * @param object [MountConfig](https://www.plate.js/api/schema/mountConfig)
 * @type decorator function
*/
export default function Mount( mountConfig:MountConfig ){
    return function(constructor: Function){
        
        if(mountConfig.base === ''){

        }
        else{

        }

    };
}

