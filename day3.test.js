const Rucksack = require('./day3');
const Rucksack2 = require("./day3.2");

const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`.trim();

test('test', () => {expect(Rucksack(input)).toBe(157)});

test('test 2', () => {expect(Rucksack2(input)).toBe(70)});