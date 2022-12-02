import fs from 'fs';

enum Move {
  Rock = 1,
  Paper,
  Scissors,
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

interface OneRound {
  op: Move;
  your: Move;
  score: number;
}

const calcScore = (opponentMove: Move, yourMove: Move): number => {
  if (opponentMove === yourMove) {
    return 3 + yourMove; // Draw
  }
  if (
    (yourMove === Move.Paper && opponentMove === Move.Rock) ||
    (yourMove === Move.Rock && opponentMove === Move.Scissors) ||
    (yourMove === Move.Scissors && opponentMove === Move.Paper)
  ) {
    return 6 + yourMove; // Win
  }
  return 0 + yourMove; // Lose
};

export const day2 = () => {
  const input = fs.readFileSync('./inputs/day2input', 'utf-8');
  const rounds: Array<OneRound> = input.split(`\r\n`).map((letters) => {
    const opponentMove = translateOpponentMove(letters.split(' ')[0]);
    const yourMove = translateYourMove(letters.split(' ')[1]);
    return {
      op: opponentMove,
      your: yourMove,
      score: calcScore(opponentMove, yourMove),
    };
  });
  const totalScore = rounds.reduce((acc, round) => acc + round.score, 0);
  return totalScore;
};

export default day2;
