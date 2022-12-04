export const day4 = (input: string): number => {
  const pairAssignments = input.replace(/\r/g, '').split(`\n`);
  return pairAssignments.reduce(
    (sum, pair) => (pairFullyOverlaps(pair) ? sum + 1 : sum),
    0
  );
};
export const day4part2 = (input: string): number => {
  const pairAssignments = input.replace(/\r/g, '').split(`\n`);
  return pairAssignments.reduce(
    (sum, pair) => (pairOverlaps(pair) ? sum + 1 : sum),
    0
  );
};

export const pairFullyOverlaps = (pair: string): boolean => {
  const firstElfAssignments = pair
    .split(',')[0]
    .split('-')
    .map((num) => parseInt(num));
  const secondElfAssignments = pair
    .split(',')[1]
    .split('-')
    .map((num) => parseInt(num));

  // First elf assignments inside second
  if (
    firstElfAssignments[0] >= secondElfAssignments[0] &&
    firstElfAssignments[1] <= secondElfAssignments[1]
  ) {
    return true;
  }
  // Second elf assignments inside first
  if (
    secondElfAssignments[0] >= firstElfAssignments[0] &&
    secondElfAssignments[1] <= firstElfAssignments[1]
  ) {
    return true;
  }
  return false;
};

export const pairOverlaps = (pair: string): boolean => {
  const firstElfAssignments = pair
    .split(',')[0]
    .split('-')
    .map((num) => parseInt(num));
  const secondElfAssignments = pair
    .split(',')[1]
    .split('-')
    .map((num) => parseInt(num));

  if (pairFullyOverlaps(pair)) return true;

  // First ends in second
  if (
    firstElfAssignments[0] <= firstElfAssignments[1] &&
    firstElfAssignments[1] >= secondElfAssignments[0] &&
    firstElfAssignments[0] <= secondElfAssignments[1] &&
    secondElfAssignments[0] <= secondElfAssignments[1]
  ) {
    return true;
  }
  return false;
};

export default day4;
