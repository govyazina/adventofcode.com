const radioSignal = require('./day6');

// const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

test('test-1', () => {expect(radioSignal(startStacks, `mjqjpqmgbljsphdztnvjfqwrcgsmlb`)).toBe('7')});
test('test-2', () => {expect(radioSignal(startStacks, 'bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe('5')});
test('test-3', () => {expect(radioSignal(startStacks, 'nppdvjthqldpwncqszvftbrmjlhg')).toBe('6')});
test('test-4', () => {expect(radioSignal(startStacks, 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe('10')});
test('test-5', () => {expect(radioSignal(startStacks, 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe('11')});