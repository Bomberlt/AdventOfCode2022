import day9 from './day9';

describe('day 9', () => {
  describe('Given input moves', () => {
    describe(`R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`, () => {
      const inputMoves = `R 4
U 4
L 3
D 1
R 4
D 1
L 5
R 2`;
      it('should return 13', () => {
        expect(day9(inputMoves)).toBe(13);
      });
    });
  });
});
