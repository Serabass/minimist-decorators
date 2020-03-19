import minimist from 'minimist';
import {ARGS_KEY} from './index';

export function Arg(shortName?: string): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        let mm = Reflect.getMetadata(ARGS_KEY, target);

        if (!mm) {
            mm = {};
        }

        mm[propertyKey] = {
            fn: (mm: minimist.ParsedArgs) => mm[propertyKey as any],
            shortName
        };
        Reflect.defineMetadata(ARGS_KEY, mm, target);
    }
}
