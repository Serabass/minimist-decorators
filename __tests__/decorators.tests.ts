import 'reflect-metadata';
import {Args, Arg, _} from '../src';

@Args(['a.yml', 'b.yml', '--watch', '**/*.ts', '-i', '-y', '-r', '4'])
class Arguments {
    @_()
    public static names: string[];

    @Arg()
    public static watch: string;

    @Arg('i')
    public static caseInsensitive: boolean;

    @Arg('y')
    public static yes: boolean;

    @Arg('r')
    public static repeat: number;
}

describe('Simple tests', () => {
    it('Simple', () => {
        expect(Arguments.watch).toBe('**/*.ts');
        expect(Arguments.caseInsensitive).toBe(true);
        expect(Arguments.names).toEqual(['a.yml', 'b.yml']);
        expect(Arguments.yes).toEqual(true);
        expect(Arguments.repeat).toEqual(4);
    });
});
