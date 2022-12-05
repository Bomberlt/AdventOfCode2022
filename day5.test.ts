import day5, { parseStartingtacks } from './day5';
describe('day5', () => {
  describe(`When puzzle input is
[D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`, () => {
    const puzzleInput = `[D]    
[N] [C]    
[Z] [M] [P]
1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
    it('should return answer CMZ', () => {
      expect(day5(puzzleInput)).toBe('CMZ');
    });
  });

  describe('parseStartingStacks', () => {
    describe(`When puzzle input is
  [D]    
  [N] [C]    
  [Z] [M] [P]
   1   2   3`, () => {
      const puzzleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
1   2   3`;
      const result = parseStartingtacks(puzzleInput);
      it('should return three arrays', () => {
        expect(result).toHaveLength(3);
      });
      it('should return first array with Z N', () => {
        expect(result[0]).toStrictEqual(['Z', 'N']);
      });
      it('should return second array with M C D', () => {
        expect(result[1]).toStrictEqual(['M', 'C', 'D']);
      });
      it('should return third array with P', () => {
        expect(result[2]).toStrictEqual(['P']);
      });
    });
  });
});
