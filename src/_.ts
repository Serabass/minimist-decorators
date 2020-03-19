import minimist from 'minimist';
import {ARGS_KEY} from './index';

export function _(): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        let mm = Reflect.getMetadata(ARGS_KEY, target);

        if (!mm) {
            mm = {};
        }

        mm[propertyKey] = {
            fn: (mm: minimist.ParsedArgs) => mm[propertyKey as any],
            shortName: '_'
        };
        Reflect.defineMetadata(ARGS_KEY, mm, target);
    }
}
