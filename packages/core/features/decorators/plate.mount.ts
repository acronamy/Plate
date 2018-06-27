import { MountConfig } from '../schema/mount.interface';
import { viewsStore } from '../stores/views.store';
import { resolveToModule, deepFindTemplates } from './logic-mount/mount-config-handler.logic';

/**
 * ### @Mount
 * Decorator used to mark this class as the host of many or one route.
 * @param object [MountConfig](https://www.plate.js/api/schema/mountConfig)
 * @type decorator function
*/
export default function Mount( mountConfig:MountConfig ){
    return function(Target: Function){
        const proto = Target.prototype;

        proto.id = Target.name;
        proto.base = mountConfig.base;
        proto.views = {}

        for(let path of mountConfig.views){
            const view = resolveToModule(mountConfig.module, path);
            const templates = deepFindTemplates(view, '.html');
            proto.views[view] = templates;
        }

        console.log(proto)

    };
}

