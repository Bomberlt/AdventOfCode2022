interface PositionState {
  start: boolean;
  head: boolean;
  tails: boolean;
  visited: boolean;
}

enum Direction {
  Left,
  Right,
  Up,
  Down,
}
interface Move {
  direction: Direction;
  steps: number;
}

export const day9 = (seriesOfMotions: string): number => {
  const state = createInitialState();
  const moves = parseMoves(seriesOfMotions);
  // apply moves
  moves.forEach((move) => {
    moveHead(state, move);
    //moveTail(state);
  });
  // count
  return 13;
};

export const day9part2 = (seriesOfMotions: string): number => {
  return 13;
};

export const createInitialState = (): Array<Array<PositionState>> => {
  const spaceHeight = 5;
  const spaceWidth = 6;
  const initialState = new Array(spaceHeight);
  for (let i = 0; i < initialState.length; i++) {
    const row = new Array(spaceWidth);
    for (let j = 0; j < row.length; j++) {
      row[j] = createInitialPositionState();
    }
    initialState[i] = row;
  }
  initialState[4][0].start = true;
  initialState[4][0].head = true;
  initialState[4][0].tails = true;
  initialState[4][0].visited = true;
  return initialState;
};

export const parseMoves = (seriesOfMotions: string): Array<Move> => {
  return seriesOfMotions
    .replace(/\r/g, '')
    .split(`\n`)
    .map((line) => {
      let direction;
      switch (line.split(' ')[0]) {
        case 'L':
          direction = Direction.Left;
          break;
        case 'R':
          direction = Direction.Right;
          break;
        case 'U':
          direction = Direction.Up;
          break;
        case 'D':
          direction = Direction.Down;
          break;
      }
      return { direction, steps: parseInt(line.split(' ')[1]) };
    });
};

export const moveHead = (state: Array<Array<PositionState>>, move: Move) => {
  let initialRow;
  let initialCell;
  state.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      if (cell.head) {
        initialRow = rowIndex;
        initialCell = cellIndex;
      }
    })
  );

  let finalRow = initialRow;
  let finalCell = initialCell;
  switch (move.direction) {
    case Direction.Left:
      finalCell = finalCell - move.steps;
      break;
    case Direction.Right:
      finalCell = finalCell + move.steps;
      break;
    case Direction.Up:
      finalRow = finalRow - move.steps;
      break;
    case Direction.Down:
      finalRow = finalRow + move.steps;
      break;
  }
  state[initialRow][initialCell].head = false;
  state[finalRow][finalCell].head = true;
};

const moveTail = (state: Array<Array<PositionState>>) => {
  let headRow;
  let headCell;
  let initialTRow;
  let initialTCell;
  state.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      if (cell.head) {
        headRow = rowIndex;
        headCell = cellIndex;
      }
      if (cell.tails) {
        initialTRow = rowIndex;
        initialTCell = cellIndex;
      }
    })
  );

  if (
    Math.abs(headRow - initialTRow) < 2 &&
    Math.abs(headCell - initialTCell) < 2
  ) {
    return;
  }

  let tailsRow = initialTRow;
  let tailsCell = initialTCell;

  if (headRow !== tailsRow && headCell !== tailsCell) {
    // Do diagonal move
    state[tailsCell][tailsRow].visited = true;
    state[tailsCell][tailsRow].tails = false;

    // upleft
    if (headRow < tailsRow && headCell < tailsCell) {
      tailsRow = tailsRow - 1;
      tailsCell = tailsCell - 1;
    }
    // upright
    if (headRow < tailsRow && headCell > tailsCell) {
      tailsRow = tailsRow - 1;
      tailsCell = tailsCell + 1;
    }
    // downright
    if (headRow > tailsRow && headCell > tailsCell) {
      tailsRow = tailsRow + 1;
      tailsCell = tailsCell + 1;
    }
    // downleft
    if (headRow > tailsRow && headCell < tailsCell) {
      tailsRow = tailsRow + 1;
      tailsCell = tailsCell - 1;
    }
    state[tailsCell][tailsRow].tails = true;
  }
  // Do directional moves

  //state[headRow][headCell].tails = false;
  state[tailsRow][tailsCell].tails = true;
};

export const createInitialPositionState = () => {
  return { start: false, head: false, tails: false, visited: false };
};

export default day9;
