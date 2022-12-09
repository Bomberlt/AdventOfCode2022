import day9, {
  createInitialState,
  moveHead,
  moveTails,
  parseMoves,
} from './day9';

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
      it('head should be at 3,3', () => {
        const state = createInitialState();
        const moves = parseMoves(inputMoves);
        moves.forEach((move) => {
          moveHead(state, move);
        });
        expect(state[2][2].head).toBeTruthy();
      });
      it('tails should be at 3,2', () => {
        const state = createInitialState();
        const moves = parseMoves(inputMoves);
        moves.forEach((move) => {
          moveHead(state, move);
          moveTails(state);
        });
        expect(state[2][1].tails).toBeTruthy();
      });
    });
  });
});
