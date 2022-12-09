const stacks = require('./day5');

const startStacks =
    [
        [' '],
        ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
    ];
// const startStacks = `
//     [D]
// [N] [C]
// [Z] [M] [P]
//  1   2   3 `;
const input = `
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`.trim();

test('test', () => {expect(stacks(startStacks, input)).toBe('CMZ')});