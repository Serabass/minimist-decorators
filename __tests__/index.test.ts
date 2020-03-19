import minimist from 'minimist';

describe('Simple tests', () => {
    let x = minimist(['a.yml', 'b.yml', '--watch', '**/*.ts', '-i']);

    it('Simple', () => {
        expect(x).toBeDefined();
        expect(Object.keys(x)).toEqual(['_', 'watch', 'i']);
        expect(x._).toEqual(['a.yml', 'b.yml']);
        expect(x.watch).toBe('**/*.ts');
        expect(x.i).toBe(true);
    });
});
