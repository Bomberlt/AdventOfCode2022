import day8, { day8part2 } from './day8';
import fs from 'fs';

describe('day8', () => {
  describe('map of trees', () => {
    describe(`is
30373
25512
65332
33549
35390`, () => {
      const mapOfTrees = `30373
25512
65332
33549
35390`;
      it('should return 21', () => {
        expect(day8(mapOfTrees)).toBe(21);
      });
    });
  });
});

describe('day8part2', () => {
  describe('map of trees', () => {
    describe(`is
30373
25512
65332
33549
35390`, () => {
      const mapOfTrees = `30373
25512
65332
33549
35390`;
      it('should return 8', () => {
        expect(day8part2(mapOfTrees)).toBe(8);
      });
    });
    describe(`is
30373
25512
65332
33549
35390`, () => {
      const mapOfTrees = fs.readFileSync(`./inputs/day8input`, 'utf-8');
      it('should return more then 9792', () => {
        expect(day8part2(mapOfTrees)).toBeGreaterThan(9792);
      });
    });
  });
});
