import fs from 'fs';

export enum Move {
  Rock = 1,
  Paper,
  Scissors,
}

export enum Outcome {
  Lose = 0,
  Draw = 3,
  Win = 6,
}

const translateOpponentMove = (letter: string): Move => {
  switch (letter) {
    case 'A':
      return Move.Rock;
    case 'B':
      return Move.Paper;
    case 'C':
      return Move.Scissors;
    default:
      break;
  }
};

const translateYourMove = (letter: string): Move => {
  switch (letter) {
    case 'X':
      return Move.Rock;
    case 'Y':
      return Move.Paper;
    case 'Z':
      return Move.Scissors;
    default:
      break;
  }
};

const translateOutcome = (letter: string): Outcome => {
  switch (letter) {
    case 'X':
      return Outcome.Lose;
    case 'Y':
      return Outcome.Draw;
    case 'Z':
      return Outcome.Win;
    default:
      break;
  }
};

interface OneRound {
  op: Move;
  your: Move;
  score: number;
}

const getOutcome = (opponentMove: Move, yourMove: Move): Outcome => {
  if (opponentMove === yourMove) {
    return Outcome.Draw;
  }
  if (
    (yourMove === Move.Paper && opponentMove === Move.Rock) ||
    (yourMove === Move.Rock && opponentMove === Move.Scissors) ||
    (yourMove === Move.Scissors && opponentMove === Move.Paper)
  ) {
    return Outcome.Win;
  }
  return Outcome.Lose;
};

export const getYourMove = (opponentMove: Move, outcome: Outcome): Move => {
  if (outcome === Outcome.Draw) {
    return opponentMove;
  }

  if (outcome === Outcome.Win) {
    switch (opponentMove) {
      case Move.Rock:
        return Move.Paper;
      case Move.Paper:
        return Move.Scissors;
      case Move.Scissors:
        return Move.Rock;
    }
  }
  switch (opponentMove) {
    case Move.Rock:
      return Move.Scissors;
    case Move.Paper:
      return Move.Rock;
    case Move.Scissors:
      return Move.Paper;
  }
};

export const day2 = () => {
  const input = fs.readFileSync('./inputs/day2input', 'utf-8');
  const rounds: Array<OneRound> = input.split(`\r\n`).map((letters) => {
    const opponentMove = translateOpponentMove(letters.split(' ')[0]);
    const yourMove = translateYourMove(letters.split(' ')[1]);
    const outcome = getOutcome(opponentMove, yourMove);
    return {
      op: opponentMove,
      your: yourMove,
      score: yourMove + outcome,
    };
  });
  const totalScore = rounds.reduce((acc, round) => acc + round.score, 0);
  return totalScore;
};

export const day2part2 = () => {
  const input = fs.readFileSync('./inputs/day2input', 'utf-8');
  const rounds: Array<OneRound> = input.split(`\r\n`).map((letters) => {
    const opponentMove = translateOpponentMove(letters.split(' ')[0]);
    const outcome = translateOutcome(letters.split(' ')[1]);
    const yourMove = getYourMove(opponentMove, outcome);
    return {
      op: opponentMove,
      your: yourMove,
      score: yourMove + outcome,
    };
  });
  const totalScore = rounds.reduce((acc, round) => acc + round.score, 0);
  return totalScore;
};
export default day2;
