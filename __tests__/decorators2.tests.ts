import 'reflect-metadata';
import {Args, Arg, _} from '../src';

@Args(['--repeat', '4'])
class Arguments {
    @Arg('r')
    public static repeat: number;
}

describe('Simple tests with only short name', () => {
    it('Simple', () => {
        expect(Arguments.repeat).toEqual(4);
    });
});
