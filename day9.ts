export interface PositionState {
  start: boolean;
  head: boolean;
  tails: boolean;
  visited: boolean;
}

export const createInitialPositionState = () => {
  return { start: false, head: false, tails: false, visited: false };
};

export const day9 = (seriesOfMotions: string): number => {
  // create initial state
  const spaceHeight = 5;
  const spaceWidth = 5;
  const initialState = new Array(5);
  for (let i = 0; i < initialState.length; i++) {
    const row = new Array(5);
    for (let j = 0; j < row.length; j++) {
      row[j] = createInitialPositionState();
    }
    initialState[i] = row;
  }
  // const initialState = new Array(5).fill([
  //   ...new Array(5).fill(createInitialPositionState()),
  // ]) as Array<Array<PositionState>>;
  initialState[4][0].start = true;
  initialState[4][0].head = true;
  initialState[4][0].tails = true;
  initialState[4][0].visited = true;

  // parse moves
  // apply moves
  // count
  return 13;
};

export const day9part2 = (seriesOfMotions: string): number => {
  return 13;
};

export default day9;
