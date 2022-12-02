import day2, { getYourMove, Move, Outcome, day2part2 } from './day2';

describe('day2', () => {
  describe('getYourMove', () => {
    describe('when opponent move is Rock', () => {
      const opMove = Move.Rock;
      describe('and outcome is Draw', () => {
        const outcome = Outcome.Draw;
        it('should return Rock', () => {
          const result = getYourMove(opMove, outcome);

          expect(result).toBe(Move.Rock);
        });
      });
    });
  });

  describe(`example1:
A Y
B X
C Z`, () => {
    const exampleInput = `A Y
B X
C Z`;
    describe('for day2', () => {
      it('should return 15', () => {
        const result = day2(exampleInput);

        expect(result).toBe(15);
      });
    });

    describe('for day2part2', () => {
      it('should return 12', () => {
        const result = day2part2(exampleInput);

        expect(result).toBe(12);
      });
    });
  });
});
