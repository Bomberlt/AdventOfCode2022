interface PositionState {
  start: boolean;
  head: boolean;
  tails: boolean;
  visited: boolean;
  otherParts: Array<boolean>;
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
  const state = createInitialState(0);
  const moves = parseMoves(seriesOfMotions);
  // apply moves
  moves.forEach((move, i) => {
    //console.log(move, i);
    moveHead(state, move);
    //printState(state);
    const headPos = { row: 0, cell: 0 };
    const tailsPos = { row: 0, cell: 0 };
    state.forEach((row, rowIndex) =>
      row.forEach((cell, cellIndex) => {
        if (cell.head) {
          headPos.row = rowIndex;
          headPos.cell = cellIndex;
        }
        if (cell.tails) {
          tailsPos.row = rowIndex;
          tailsPos.cell = cellIndex;
        }
      })
    );
    moveTails(state, headPos, tailsPos);
    //if (i > 1600) printState(state);
  });
  const visitedCount = state.reduce(
    (sum, row) =>
      sum + row.reduce((sum2, cell) => sum2 + (cell.visited ? 1 : 0), 0),
    0
  );
  return visitedCount;
};

export const day9part2 = (seriesOfMotions: string): number => {
  const state = createInitialState(10);
  const moves = parseMoves(seriesOfMotions);
  // apply moves
  moves.forEach((move, i) => {
    //if (i < 10)
    console.log(move, i);
    moveHeadAndParts(state, move);

    if (i > 1950) printState(state, 10);
  });
  printState(state, 10);
  const visitedCount = state.reduce(
    (sum, row) =>
      sum + row.reduce((sum2, cell) => sum2 + (cell.visited ? 1 : 0), 0),
    0
  );
  return visitedCount;
};

export const createInitialState = (
  knotCount: number
): Array<Array<PositionState>> => {
  // const spaceHeight = 5;
  // const spaceWidth = 6;
  // const spaceHeight = 75;
  // const spaceWidth = 200;
  const spaceHeight = 250;
  const spaceWidth = 400;
  const initialState = new Array(spaceHeight);
  for (let i = 0; i < initialState.length; i++) {
    const row = new Array(spaceWidth);
    for (let j = 0; j < row.length; j++) {
      row[j] = createInitialPositionState(knotCount);
    }
    initialState[i] = row;
  }
  // const startRow = spaceHeight - 1;
  // const startCell = 0;
  // const startRow = 25;
  // const startCell = 25;
  const startRow = 50;
  const startCell = 300;
  initialState[startRow][startCell].start = true;
  initialState[startRow][startCell].head = true;
  initialState[startRow][startCell].tails = true;
  initialState[startRow][startCell].visited = true;
  if (knotCount > 2) {
    const otherParts = new Array(knotCount - 2);
    for (let i = 0; i < otherParts.length; i++) {
      otherParts[i] = true;
    }
    initialState[startRow][startCell].otherParts = otherParts;
  }
  return initialState;
};

export const createInitialPositionState = (knotCount: number) => {
  if (knotCount <= 2) {
    return {
      start: false,
      head: false,
      tails: false,
      visited: false,
      otherParts: [],
    };
  }
  const otherParts = new Array(knotCount - 2);
  for (let i = 0; i < otherParts.length; i++) {
    otherParts[i] = false;
  }
  return {
    start: false,
    head: false,
    tails: false,
    visited: false,
    otherParts: otherParts,
  };
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

export const moveHeadAndParts = (
  state: Array<Array<PositionState>>,
  move: Move
) => {
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

  let headRow = initialRow;
  let headCell = initialCell;
  switch (move.direction) {
    case Direction.Left:
      for (let index = 0; index < move.steps; index++) {
        state[headRow][headCell].head = false;
        headCell--;
        state[headRow][headCell].head = true;
        movePartsOnce({ row: headRow, cell: headCell }, state);
      }
      break;
    case Direction.Right:
      for (let index = 0; index < move.steps; index++) {
        state[headRow][headCell].head = false;
        headCell++;
        state[headRow][headCell].head = true;
        movePartsOnce({ row: headRow, cell: headCell }, state);
      }
      break;
    case Direction.Up:
      for (let index = 0; index < move.steps; index++) {
        state[headRow][headCell].head = false;
        headRow--;
        state[headRow][headCell].head = true;
        movePartsOnce({ row: headRow, cell: headCell }, state);
      }
      break;
    case Direction.Down:
      for (let index = 0; index < move.steps; index++) {
        state[headRow][headCell].head = false;
        headRow++;
        state[headRow][headCell].head = true;
        movePartsOnce({ row: headRow, cell: headCell }, state);
      }
      break;
  }
};

export const movePartsOnce = (
  headPos: Position,
  state: Array<Array<PositionState>>
) => {
  let prevPartPos = movePartOnce(headPos, state, 0);
  prevPartPos = movePartOnce(prevPartPos, state, 1);
  prevPartPos = movePartOnce(prevPartPos, state, 2);
  prevPartPos = movePartOnce(prevPartPos, state, 3);
  prevPartPos = movePartOnce(prevPartPos, state, 4);
  prevPartPos = movePartOnce(prevPartPos, state, 5);
  prevPartPos = movePartOnce(prevPartPos, state, 6);
  prevPartPos = movePartOnce(prevPartPos, state, 7);
  prevPartPos = moveTailOnce(prevPartPos, state);
};

export const movePartOnce = (
  prevPartPos: Position,
  state: Array<Array<PositionState>>,
  partNo: number
): Position => {
  const partPos = { row: -1, cell: -1 };
  state.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      if (cell.otherParts[partNo]) {
        partPos.row = rowIndex;
        partPos.cell = cellIndex;
      }
    })
  );
  if (
    Math.abs(prevPartPos.row - partPos.row) <= 1 &&
    Math.abs(prevPartPos.cell - partPos.cell) <= 1
  ) {
    return partPos;
  }
  let modifiedPartPos = { row: -1, cell: -1 };
  if (prevPartPos.row !== partPos.row && prevPartPos.cell !== partPos.cell) {
    modifiedPartPos = diagonalMove(
      state,
      partPos.row,
      partPos.cell,
      prevPartPos.row,
      prevPartPos.cell,
      false,
      partNo
    );
  } else {
    modifiedPartPos = directionalMove(
      state,
      partPos.row,
      partPos.cell,
      prevPartPos.row,
      prevPartPos.cell,
      false,
      partNo
    );
  }
  return modifiedPartPos;
};
export const moveTailOnce = (
  prevPartPos: Position,
  state: Array<Array<PositionState>>
): Position => {
  const partPos = { row: -1, cell: -1 };
  state.forEach((row, rowIndex) =>
    row.forEach((cell, cellIndex) => {
      if (cell.tails) {
        partPos.row = rowIndex;
        partPos.cell = cellIndex;
      }
    })
  );
  if (
    Math.abs(prevPartPos.row - partPos.row) <= 1 &&
    Math.abs(prevPartPos.cell - partPos.cell) <= 1
  ) {
    return;
  }
  let modifiedPartPos = { row: -1, cell: -1 };
  if (prevPartPos.row !== partPos.row && prevPartPos.cell !== partPos.cell) {
    modifiedPartPos = diagonalMove(
      state,
      partPos.row,
      partPos.cell,
      prevPartPos.row,
      prevPartPos.cell,
      true,
      -1
    );
  } else {
    modifiedPartPos = directionalMove(
      state,
      partPos.row,
      partPos.cell,
      prevPartPos.row,
      prevPartPos.cell,
      true,
      -1
    );
  }
  return modifiedPartPos;
};

export const moveTails = (
  state: Array<Array<PositionState>>,
  headPos: Position,
  tailsPos: Position
) => {
  let headRow = headPos.row;
  let headCell = headPos.cell;
  let tailsRow = tailsPos.row;
  let tailsCell = tailsPos.cell;

  if (
    Math.abs(headRow - tailsRow) <= 1 &&
    Math.abs(headCell - tailsCell) <= 1
  ) {
    return;
  }

  while (headRow !== tailsRow && headCell !== tailsCell) {
    if (
      Math.abs(headRow - tailsRow) <= 1 &&
      Math.abs(headCell - tailsCell) <= 1
    ) {
      return;
    }
    const modifiedTailsPos = diagonalMove(
      state,
      tailsRow,
      tailsCell,
      headRow,
      headCell,
      true,
      -10
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

  directionalMove(state, tailsRow, tailsCell, headRow, headCell, true, -10);
};
export const movePart = (
  state: Array<Array<PositionState>>,
  headPos: Position,
  tailsPos: Position,
  partNo: number
) => {
  let headRow = headPos.row;
  let headCell = headPos.cell;
  let tailsRow = tailsPos.row;
  let tailsCell = tailsPos.cell;

  if (
    Math.abs(headRow - tailsRow) <= 1 &&
    Math.abs(headCell - tailsCell) <= 1
  ) {
    return;
  }

  while (headRow !== tailsRow && headCell !== tailsCell) {
    if (
      Math.abs(headRow - tailsRow) <= 1 &&
      Math.abs(headCell - tailsCell) <= 1
    ) {
      return;
    }
    const modifiedTailsPos = diagonalMove(
      state,
      tailsRow,
      tailsCell,
      headRow,
      headCell,
      false,
      partNo
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

  directionalMove(state, tailsRow, tailsCell, headRow, headCell, false, partNo);
};

const diagonalMove = (
  state,
  tailsRow,
  tailsCell,
  headRow,
  headCell,
  markVisited: boolean,
  partNo: number | undefined
): Position => {
  if (markVisited) state[tailsRow][tailsCell].visited = true;
  if (partNo >= 0) {
    state[tailsRow][tailsCell].otherParts[partNo] = false;
  } else {
    state[tailsRow][tailsCell].tails = false;
  }

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
  if (partNo >= 0) {
    state[tailsRow][tailsCell].otherParts[partNo] = true;
  } else {
    state[tailsRow][tailsCell].tails = true;
  }
  return { row: tailsRow, cell: tailsCell };
};

const directionalMove = (
  state,
  tailsRow,
  tailsCell,
  headRow,
  headCell,
  markVisited: boolean,
  partNo: number | undefined
): Position => {
  if (partNo >= 0) {
    state[tailsRow][tailsCell].otherParts[partNo] = false;
  } else {
    state[tailsRow][tailsCell].tails = false;
  }
  // Do directional move
  if (headRow === tailsRow) {
    const distanceMoved = Math.abs(headCell - tailsCell);
    if (headCell < tailsCell) {
      //left
      for (let i = 0; i < distanceMoved; i++) {
        if (markVisited) state[tailsRow][tailsCell - i].visited = true;
      }
      tailsCell = headCell + 1;
    } else {
      //right
      for (let i = 0; i < distanceMoved; i++) {
        if (markVisited) state[tailsRow][tailsCell + i].visited = true;
      }
      tailsCell = headCell - 1;
    }
  }
  if (headCell === tailsCell) {
    const distanceMoved = Math.abs(headRow - tailsRow);
    if (headRow < tailsRow) {
      //up
      for (let i = 0; i < distanceMoved; i++) {
        if (markVisited) state[tailsRow - i][tailsCell].visited = true;
      }
      tailsRow = headRow + 1;
    } else {
      //down
      for (let i = 0; i < distanceMoved; i++) {
        if (markVisited) state[tailsRow + i][tailsCell].visited = true;
      }
      tailsRow = headRow - 1;
    }
  }
  if (partNo >= 0) {
    state[tailsRow][tailsCell].otherParts[partNo] = true;
  } else {
    state[tailsRow][tailsCell].tails = true;
  }
  return { row: tailsRow, cell: tailsCell };
};

const printState = (state: Array<Array<PositionState>>, knotCount: number) => {
  // const markedMatrix = state.map((row) =>
  //   row.map((cell, i) =>
  //     // i > 100 && i < 350
  //     //   ? ''
  //     //   :
  //     cell.head ? 'H' : cell.tails ? 'T' : cell.visited ? '#' : '.'
  //   )
  // );
  const markedMatrix = state.map((row) =>
    row.map((cell, i) =>
      // i > 100 && i < 350
      //   ? ''
      //   :
      // i < 150 && i > 300
      //   ? ''
      //   :
      cell.head
        ? 'H'
        : cell.tails
        ? 'T'
        : cell.visited
        ? '#'
        : cell.otherParts.some((p) => p)
        ? knotCount - 2 - [...cell.otherParts].reverse().findIndex((p) => p)
        : '.'
    )
  );
  console.log('state:');
  markedMatrix.forEach((row) => {
    console.log(row.join(''));
  });
};

export default day9;
