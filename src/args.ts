import minimist from 'minimist';
import {ARGS_KEY} from './index';

export function Args(argsData: string[] = process.argv): ClassDecorator {
    return (target: any) => {
        let args = minimist(argsData);
        let argsDefinitions = Reflect.getMetadata(ARGS_KEY, target);
        Object.entries(argsDefinitions).forEach(([key, value]: any) => {
            Reflect.defineProperty(target, key, {
                value: args[value.shortName] || args[key],
            });
        });
    };
}
