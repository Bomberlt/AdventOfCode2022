export const day8 = (mapOfTreesString: string): number => {
  const mapMatrix = readTreesToMatrix(mapOfTreesString);
  const colSize = mapMatrix.length;
  const rowSize = mapMatrix[0].length;

  const treesVisibility = mapMatrix.map((row, rowIndex) =>
    row.map((currentTree, colIndex) => {
      // check if edge
      if (
        rowIndex === 0 ||
        colIndex === 0 ||
        rowIndex === colSize - 1 ||
        colIndex === rowSize - 1
      ) {
        return true;
      }

      const visibleFromTop = lookUp(mapMatrix, rowIndex, colIndex).every(
        (tree) => tree < currentTree
      );
      const visibleFromBottom = lookDown(mapMatrix, rowIndex, colIndex).every(
        (tree) => tree < currentTree
      );
      const visibleFromLeft = lookLeft(row, colIndex).every(
        (tree) => tree < currentTree
      );
      const visibleFromRight = lookRight(row, colIndex).every(
        (tree) => tree < currentTree
      );
      return (
        visibleFromTop ||
        visibleFromBottom ||
        visibleFromLeft ||
        visibleFromRight
      );
    })
  );
  const visibleTreeCount = treesVisibility.reduce(
    (sum, row) =>
      sum + row.reduce((acc, visible) => (visible ? acc + 1 : acc), 0),
    0
  );
  return visibleTreeCount;
};

export const day8part2 = (mapOfTrees: string): number => {
  const mapMatrix = readTreesToMatrix(mapOfTrees);
  const colSize = mapMatrix.length;
  const rowSize = mapMatrix[0].length;
  return 21;
};

const readTreesToMatrix = (mapOfTreesString: string): Array<Array<number>> => {
  const mapOfTrees = mapOfTreesString.replace(/\r/g, '').split(`\n`);
  return mapOfTrees.map((line) => line.split('').map((num) => parseInt(num)));
};

const lookUp = (
  map: Array<Array<number>>,
  rowIndex: number,
  colIndex: number
) => map.slice(0, rowIndex).map((r) => r[colIndex]);

const lookDown = (
  map: Array<Array<number>>,
  rowIndex: number,
  colIndex: number
) => map.slice(0, rowIndex).map((r) => r[colIndex]);

const lookLeft = (row: Array<number>, colIndex: number): Array<number> =>
  row.slice(0, colIndex);
const lookRight = (row: Array<number>, colIndex: number): Array<number> =>
  row.slice(colIndex + 1);

export default day8;
