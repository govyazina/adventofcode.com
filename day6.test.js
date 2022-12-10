const radioSignal = require('./day6');

test('test-1', () => {expect(radioSignal(`mjqjpqmgbljsphdztnvjfqwrcgsmlb`)).toBe(19)});
test('test-2', () => {expect(radioSignal('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23)});
test('test-3', () => {expect(radioSignal('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23)});
test('test-4', () => {expect(radioSignal('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29)});
test('test-5', () => {expect(radioSignal('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26)});