import { getYourMove, Move, Outcome } from './day2';

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
});
