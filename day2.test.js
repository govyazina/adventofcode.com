const f = require('./day2')

const input = `
A Y
B X
C Z`

test('test', () => {expect(f(input)).toBe(15)});