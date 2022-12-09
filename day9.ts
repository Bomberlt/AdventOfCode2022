interface PositionState {
  start: boolean;
  head: boolean;
  tails: boolean;
  visited: boolean;
}

enum Direction {
  Left = 'left',
  Right = 'right',
  Up = 'up',
  Down = 'down',
}
interface Move {
  direction: Direction;
  steps: number;
}

interface Position {
  row: number;
  cell: number;
}

export const day9 = (seriesOfMotions: string): number => {
  const state = createInitialState();
  const moves = parseMoves(seriesOfMotions);
  // apply moves
  moves.forEach((move, i) => {
    if (i > 1600) console.log(move, i);
    moveHead(state, move);
    //printState(state);
    moveTails(state);
    if (i > 1600) printState(state);
  });
  const visitedCount = state.reduce(
    (sum, row) =>
      sum + row.reduce((sum2, cell) => sum2 + (cell.visited ? 1 : 0), 0),
    0
  );
  return visitedCount;
};

export const day9part2 = (seriesOfMotions: string): number => {
  return 13;
};

export const createInitialState = (): Array<Array<PositionState>> => {
  // const spaceHeight = 5;
  // const spaceWidth = 6;
  const spaceHeight = 250;
  const spaceWidth = 450;
  const initialState = new Array(spaceHeight);
  for (let i = 0; i < initialState.length; i++) {
    const row = new Array(spaceWidth);
    for (let j = 0; j < row.length; j++) {
      row[j] = createInitialPositionState();
    }
    initialState[i] = row;
  }
  // const startRow = spaceHeight - 1;
  // const startCell = 0;
  const startRow = 50;
  const startCell = 300;
  initialState[startRow][startCell].start = true;
  initialState[startRow][startCell].head = true;
  initialState[startRow][startCell].tails = true;
  initialState[startRow][startCell].visited = true;
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

export const moveTails = (state: Array<Array<PositionState>>) => {
  let headRow;
  let headCell;
  let tailsRow;
  let tailsCell;
  state.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      if (cell.head) {
        headRow = rowIndex;
        headCell = cellIndex;
      }
      if (cell.tails) {
        tailsRow = rowIndex;
        tailsCell = cellIndex;
      }
    })
  );

  if (
    Math.abs(headRow - tailsRow) <= 1 &&
    Math.abs(headCell - tailsCell) <= 1
  ) {
    return;
  }

  if (headRow !== tailsRow && headCell !== tailsCell) {
    const modifiedTailsPos = diagonalMove(
      state,
      tailsRow,
      tailsCell,
      headRow,
      headCell
    );
    tailsRow = modifiedTailsPos.row;
    tailsCell = modifiedTailsPos.cell;
  }
  if (
    Math.abs(headRow - tailsRow) <= 1 &&
    Math.abs(headCell - tailsCell) <= 1
  ) {
    return;
  }

  directionalMove(state, tailsRow, tailsCell, headRow, headCell);
};

const diagonalMove = (
  state,
  tailsRow,
  tailsCell,
  headRow,
  headCell
): Position => {
  state[tailsRow][tailsCell].visited = true;
  state[tailsRow][tailsCell].tails = false;

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
  state[tailsRow][tailsCell].tails = true;
  return { row: tailsRow, cell: tailsCell };
};

const directionalMove = (state, tailsRow, tailsCell, headRow, headCell) => {
  state[tailsRow][tailsCell].tails = false;
  // Do directional move
  if (headRow === tailsRow) {
    const distanceMoved = Math.abs(headCell - tailsCell);
    if (headCell < tailsCell) {
      //left
      for (let i = 0; i < distanceMoved; i++) {
        state[tailsRow][tailsCell - i].visited = true;
      }
      tailsCell = headCell + 1;
    } else {
      //right
      for (let i = 0; i < distanceMoved; i++) {
        state[tailsRow][tailsCell + i].visited = true;
      }
      tailsCell = headCell - 1;
    }
  }
  if (headCell === tailsCell) {
    const distanceMoved = Math.abs(headRow - tailsRow);
    if (headRow < tailsRow) {
      //up
      for (let i = 0; i < distanceMoved; i++) {
        state[tailsRow - i][tailsCell].visited = true;
      }
      tailsRow = headRow + 1;
    } else {
      //down
      for (let i = 0; i < distanceMoved; i++) {
        state[tailsRow + i][tailsCell].visited = true;
      }
      tailsRow = headRow - 1;
    }
  }
  state[tailsRow][tailsCell].tails = true;
};

export const createInitialPositionState = () => {
  return { start: false, head: false, tails: false, visited: false };
};

const printState = (state: Array<Array<PositionState>>) => {
  const markedMatrix = state.map((row) =>
    row.map((cell, i) =>
      i > 100 && i < 350
        ? ''
        : cell.head
        ? 'H'
        : cell.tails
        ? 'T'
        : cell.visited
        ? '#'
        : '.'
    )
  );
  console.log('state:');
  markedMatrix.forEach((row) => {
    console.log(row.join(''));
  });
};

export default day9;
