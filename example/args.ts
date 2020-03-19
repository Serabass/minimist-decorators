import {Arg, Args} from '../src';

@Args()
export class Argv {
    @Arg('r')
    public static repeat: number;
}
