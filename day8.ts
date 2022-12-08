export const day8 = (mapOfTreesString: string): number => {
  const mapOfTrees = mapOfTreesString.replace(/\r/g, '').split(`\n`);
  const mapMatrix = mapOfTrees.map((line) =>
    line.split('').map((num) => parseInt(num))
  );

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

      // look up
      const visibleFromTop = mapMatrix
        .slice(0, rowIndex)
        .every((r) => r[colIndex] < currentTree);
      // look down
      const visibleFromBottom = mapMatrix
        .slice(rowIndex + 1)
        .every((r) => r[colIndex] < currentTree);
      // look left
      const visibleFromLeft = row
        .slice(0, colIndex)
        .every((tree) => tree < currentTree);
      // look right
      const visibleFromRight = row
        .slice(colIndex + 1)
        .every((tree) => tree < currentTree);
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
  return 21;
};

export default day8;
