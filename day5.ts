export const day5 = (input: string): string => {
  const stacksAndMoves = input.replace(/\r/g, '').split(`\n\n`);
  const stacks = parseStartingStacks(stacksAndMoves[0]);
  const moves = parseMoves(stacksAndMoves[1]);
  const stacksAfterTransformation = applyMoves(stacks, moves);
  return stacksAfterTransformation.reduce(
    (message, stack) => message + stack.pop(),
    ''
  );
};
export const day5part2 = (input: string): string => {
  const inputArray = input.replace(/\r/g, '').split(`\n`);
  return 'CMZ';
};

export const parseStartingStacks = (
  stacksInput: string
): Array<Array<string>> => {
  const indexes = ' 1' + stacksInput.split('1')[1];
  const stacks = stacksInput
    .replace(/\r/g, '')
    .split('\n 1')[0]
    .split(`\n`)
    .reverse();
  const firstStack = [];
  const secondStack = [];
  const thirdStack = [];
  stacks.forEach((line) => {
    const firstItem = line.substring(1, 2);
    if (firstItem !== ' ') {
      firstStack.push(firstItem);
    }

    let remainingLine = line.substring(4);
    const secondItem = remainingLine.substring(1, 2);
    if (secondItem !== ' ') {
      secondStack.push(secondItem);
    }

    remainingLine = remainingLine.substring(4);
    const thirdItem = remainingLine.substring(1, 2);
    if (thirdItem !== ' ') {
      thirdStack.push(thirdItem);
    }
  });
  return [firstStack, secondStack, thirdStack];
};

export interface Move {
  move: number;
  from: number;
  to: number;
}
export const parseMoves = (movesInput: string): Array<Move> => {
  const movesArray = movesInput.replace(/\r/g, '').split(`\n`);
  return movesArray.map((moveString) => ({
    move: parseInt(moveString.split(' ')[1]),
    from: parseInt(moveString.split(' ')[3]),
    to: parseInt(moveString.split(' ')[5]),
  }));
};

export const applyMoves = (
  startingStack: Array<Array<string>>,
  moves: Array<Move>
) => {
  const stack = [...startingStack];
  moves.forEach((move) => {
    let remainingMoves = move.move;
    while (remainingMoves > 0) {
      const taken = stack[move.from - 1].pop();
      stack[move.to - 1].push(taken);
      remainingMoves = remainingMoves - 1;
    }
  });
  return stack;
};

export default day5;
