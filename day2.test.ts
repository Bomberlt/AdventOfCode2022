import day2, { getYourShape, Shape, Outcome, day2part2 } from './day2';

describe('day2', () => {
  describe('getYourShape', () => {
    describe('when opponent move is Rock', () => {
      const opMove = Shape.Rock;
      describe('and outcome is Draw', () => {
        const outcome = Outcome.Draw;
        it('should return Rock', () => {
          const result = getYourShape(opMove, outcome);

          expect(result).toBe(Shape.Rock);
        });
      });
    });
  });

  describe(`example strategy guide:
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
