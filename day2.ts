export enum Shape {
  Rock = 1,
  Paper,
  Scissors,
}

export enum Outcome {
  Lose = 0,
  Draw = 3,
  Win = 6,
}

const decryptOpponentShape = (letter: string): Shape => {
  switch (letter) {
    case 'A':
      return Shape.Rock;
    case 'B':
      return Shape.Paper;
    case 'C':
      return Shape.Scissors;
    default:
      console.log('Cant parse letter:', letter);
      break;
  }
};

const decryptYourShape = (letter: string): Shape => {
  switch (letter) {
    case 'X':
      return Shape.Rock;
    case 'Y':
      return Shape.Paper;
    case 'Z':
      return Shape.Scissors;
    default:
      console.log('Cant parse letter:', letter);
      break;
  }
};

const decryptOutcome = (letter: string): Outcome => {
  switch (letter) {
    case 'X':
      return Outcome.Lose;
    case 'Y':
      return Outcome.Draw;
    case 'Z':
      return Outcome.Win;
    default:
      console.log('Cant parse letter:', letter);
      break;
  }
};

interface OneRound {
  op: Shape;
  your: Shape;
  score: number;
}

const getOutcome = (opponentShape: Shape, yourShape: Shape): Outcome => {
  if (opponentShape === yourShape) {
    return Outcome.Draw;
  }
  if (
    (yourShape === Shape.Paper && opponentShape === Shape.Rock) ||
    (yourShape === Shape.Rock && opponentShape === Shape.Scissors) ||
    (yourShape === Shape.Scissors && opponentShape === Shape.Paper)
  ) {
    return Outcome.Win;
  }
  return Outcome.Lose;
};

export const getYourShape = (opponentShape: Shape, outcome: Outcome): Shape => {
  if (outcome === Outcome.Draw) {
    return opponentShape;
  }

  if (outcome === Outcome.Win) {
    switch (opponentShape) {
      case Shape.Rock:
        return Shape.Paper;
      case Shape.Paper:
        return Shape.Scissors;
      case Shape.Scissors:
        return Shape.Rock;
    }
  }
  switch (opponentShape) {
    case Shape.Rock:
      return Shape.Scissors;
    case Shape.Paper:
      return Shape.Rock;
    case Shape.Scissors:
      return Shape.Paper;
  }
};

export const day2 = (encryptedStrategyGuide: string): number => {
  const rounds: Array<OneRound> = encryptedStrategyGuide
    .replace(/\r/g, '')
    .split(`\n`)
    .map((letters) => {
      let opponentShape = decryptOpponentShape(letters.split(' ')[0]);
      const yourShape = decryptYourShape(letters.split(' ')[1]);
      const outcome = getOutcome(opponentShape, yourShape);
      return {
        op: opponentShape,
        your: yourShape,
        score: yourShape + outcome,
      };
    });
  return rounds.reduce((acc, round) => acc + round.score, 0);
};

export const day2part2 = (encryptedStrategyGuide: string): number => {
  const rounds: Array<OneRound> = encryptedStrategyGuide
    .replace(/\r/g, '')
    .split(`\n`)
    .map((letters) => {
      const opponentShape = decryptOpponentShape(letters.split(' ')[0]);
      const outcome = decryptOutcome(letters.split(' ')[1]);
      const yourShape = getYourShape(opponentShape, outcome);
      return {
        op: opponentShape,
        your: yourShape,
        score: yourShape + outcome,
      };
    });
  return rounds.reduce((acc, round) => acc + round.score, 0);
};
export default day2;
