const cal = require('day1')

const input = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

test('test calories', () => {expect(cal(input)).toBe(24000)});