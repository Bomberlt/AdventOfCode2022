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
      it('should return 95438', () => {
        expect(day8(mapOfTrees)).toBe(21);
      });
    });
    // describe('puzzle input', () => {
    //   const terminalOutput = fs.readFileSync(`./inputs/day8input`, 'utf-8');
    //   it('should return 1989484', () => {
    //     expect(day8(terminalOutput)).toBe(1989484);
    //   });
    // });
  });
});
