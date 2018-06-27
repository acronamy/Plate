import ModuleConfig from '../schema/module.interface';
import { settingsStore } from '../stores/settings.store';

/**
 * ### @PlateModule
 * Decorator used to mark this class as the host of many or one mount, it is the base of your application.
 * @param object [ModuleConfig](https://www.plate.js/api/schema/moduleConfig)
 * @type decorator function
*/
export default function PlateModule( ModuleConfig:ModuleConfig ){
    return function(constructor: Function){
        settingsStore.set("port", ModuleConfig.port);
        settingsStore.set("appBase", ModuleConfig.base);
    };
}

