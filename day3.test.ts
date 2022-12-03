import day3, { containsInBoth, convertItemToPriority } from './day3';

describe('day3', () => {
  describe('item containing in both rucksack compartments', () => {
    describe('rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp', () => {
      const input = 'vJrwpWtwJgWrhcsFMMfFFhFp';
      it('answer is lowercase p', () => {
        const answer = containsInBoth(input);

        expect(answer).toBe('p');
      });
    });
    describe('rucksack contains the items jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', () => {
      const input = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL';
      it('answer is uppercase L', () => {
        const answer = containsInBoth(input);

        expect(answer).toBe('L');
      });
    });
    describe('rucksack contains the items PmmdzqPrVvPwwTWBwg', () => {
      const input = 'PmmdzqPrVvPwwTWBwg';
      it('answer is uppercase P', () => {
        const answer = containsInBoth(input);

        expect(answer).toBe('P');
      });
    });
  });

  describe('convertItemToPriority', () => {
    describe('item a', () => {
      const item = 'a';
      it('should return 1', () => {
        const priority = convertItemToPriority(item);

        expect(priority).toBe(1);
      });
    });
    describe('item A', () => {
      const item = 'A';
      it('should return 27', () => {
        const priority = convertItemToPriority(item);

        expect(priority).toBe(27);
      });
    });
    describe('item p', () => {
      const item = 'p';
      it('should return 16', () => {
        const priority = convertItemToPriority(item);

        expect(priority).toBe(16);
      });
    });
    describe('item L', () => {
      const item = 'L';
      it('should return 38', () => {
        const priority = convertItemToPriority(item);

        expect(priority).toBe(38);
      });
    });
  });

  describe(`example contents from rucksacks:
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`, () => {
    const exampleInput = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;
    describe('for day3', () => {
      it('should return 157', () => {
        const result = day3(exampleInput);

        expect(result).toBe(157);
      });
    });
  });
});
