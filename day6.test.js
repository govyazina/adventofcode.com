const radioSignal = require('./day6');

// const input = `mjqjpqmgbljsphdztnvjfqwrcgsmlb`;

test('test-1', () => {expect(radioSignal(`mjqjpqmgbljsphdztnvjfqwrcgsmlb`)).toBe(7)});
test('test-2', () => {expect(radioSignal('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5)});
test('test-3', () => {expect(radioSignal('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6)});
test('test-4', () => {expect(radioSignal('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10)});
test('test-5', () => {expect(radioSignal('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11)});