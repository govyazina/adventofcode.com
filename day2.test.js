const f = require('./day2')
const f2 = require('./day2.2')

const input = `
A Y
B X
C Z`

test('test', () => {expect(f(input)).toBe(15)});
test('test 2', () => {expect(f2(input)).toBe(12)});