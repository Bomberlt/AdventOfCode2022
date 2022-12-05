import day5, {
  applyMoves,
  applyMoves9001,
  parseMoves,
  parseStartingStacks,
} from './day5';
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
    const puzzleInput = `    [D]    
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
   1   2   3 `, () => {
      const puzzleInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3`;
      const result = parseStartingStacks(puzzleInput);
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
  describe('parseMoves', () => {
    describe(`when puzzle input is
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`, () => {
      const puzzleInput = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
      const result = parseMoves(puzzleInput);
      it('should return array length of 4', () => {
        expect(result).toHaveLength(4);
      });

      it('should return first object 1 2 1', () => {
        expect(result[0].move).toBe(1);
        expect(result[0].from).toBe(2);
        expect(result[0].to).toBe(1);
      });
      it('should return second object 3 1 3', () => {
        expect(result[1].move).toBe(3);
        expect(result[1].from).toBe(1);
        expect(result[1].to).toBe(3);
      });
    });
  });
  describe('applyMoves', () => {
    describe(`When starting stacks is
  [D]    
  [N] [C]    
  [Z] [M] [P]
   1   2   3`, () => {
      const startingStacks = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3`;
      describe(`and moves is
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`, () => {
        const moves = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
        const result = applyMoves(
          parseStartingStacks(startingStacks),
          parseMoves(moves)
        );
        it('should return three arrays', () => {
          expect(result).toHaveLength(3);
        });
        it('should return first array with C', () => {
          expect(result[0]).toStrictEqual(['C']);
        });
        it('should return second array with M', () => {
          expect(result[1]).toStrictEqual(['M']);
        });
        it('should return third array with P', () => {
          expect(result[2]).toStrictEqual(['P', 'D', 'N', 'Z']);
        });
      });
    });
  });
  describe('applyMoves9001', () => {
    describe(`When starting stacks is
  [D]    
  [N] [C]    
  [Z] [M] [P]
   1   2   3`, () => {
      const startingStacks = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3`;
      describe(`and moves is
move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`, () => {
        const moves = `move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;
        const result = applyMoves9001(
          parseStartingStacks(startingStacks),
          parseMoves(moves)
        );
        it('should return three arrays', () => {
          expect(result).toHaveLength(3);
        });
        it('should return first array with M', () => {
          expect(result[0]).toStrictEqual(['M']);
        });
        it('should return second array with C', () => {
          expect(result[1]).toStrictEqual(['C']);
        });
        it('should return third array with P', () => {
          expect(result[2]).toStrictEqual(['P', 'Z', 'N', 'D']);
        });
      });
    });
  });
});
