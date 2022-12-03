import day3, {
  containsInBothCompartments,
  convertItemToPriority,
  day3part2,
  findBadge,
  groupRucksacs,
} from './day3';

describe('day3', () => {
  describe('item containing in both rucksack compartments', () => {
    describe('rucksack contains the items vJrwpWtwJgWrhcsFMMfFFhFp', () => {
      const input = 'vJrwpWtwJgWrhcsFMMfFFhFp';
      it('answer is lowercase p', () => {
        const answer = containsInBothCompartments(input);

        expect(answer).toBe('p');
      });
    });
    describe('rucksack contains the items jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL', () => {
      const input = 'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL';
      it('answer is uppercase L', () => {
        const answer = containsInBothCompartments(input);

        expect(answer).toBe('L');
      });
    });
    describe('rucksack contains the items PmmdzqPrVvPwwTWBwg', () => {
      const input = 'PmmdzqPrVvPwwTWBwg';
      it('answer is uppercase P', () => {
        const answer = containsInBothCompartments(input);

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
  describe('find badge', () => {
    describe(`group rucksacks contains the items:
        vJrwpWtwJgWrhcsFMMfFFhFp
        jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
        PmmdzqPrVvPwwTWBwg`, () => {
      const input = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
      ];
      it('answer is lowercase r', () => {
        const answer = findBadge(input);

        expect(answer).toBe('r');
      });
    });
    describe(`group rucksacks contains the items:
        wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
        ttgJtRGJQctTZtZT
        CrZsJsPPZsGzwwsLwLmpwMDw`, () => {
      const input = [
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
      ];
      it('answer is Z', () => {
        const answer = findBadge(input);

        expect(answer).toBe('Z');
      });
    });
  });

  describe('group rucksacks', () => {
    describe(`list or rucksacks is
      vJrwpWtwJgWrhcsFMMfFFhFp
      jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
      PmmdzqPrVvPwwTWBwg
      wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
      ttgJtRGJQctTZtZT
      CrZsJsPPZsGzwwsLwLmpwMDw`, () => {
      const rucksacks = [
        'vJrwpWtwJgWrhcsFMMfFFhFp',
        'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
        'PmmdzqPrVvPwwTWBwg',
        'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
        'ttgJtRGJQctTZtZT',
        'CrZsJsPPZsGzwwsLwLmpwMDw',
      ];
      it('should return two groups', () => {
        const groups = groupRucksacs(rucksacks);

        expect(groups.length).toBe(2);
      });
      it('should return two groups with three rucksacks each', () => {
        const groups = groupRucksacs(rucksacks);

        console.log('groups[0]');
        console.log(groups[0]);
        expect(groups[0].length).toBe(3);
        expect(groups[1].length).toBe(3);
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
    describe('for day3 part2', () => {
      it('should return 70', () => {
        const result = day3part2(exampleInput);

        expect(result).toBe(70);
      });
    });
  });
});
