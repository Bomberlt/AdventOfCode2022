export const day4 = (input: string): number => {
  const pairAssignments = input.replace(/\r/g, '').split(`\n`);
  return pairAssignments.reduce(
    (sum, pair) => (pairFullyOverlaps(pair) ? sum + 1 : sum),
    0
  );
};

export const pairFullyOverlaps = (pair: string): boolean => {
  console.log('pair"' + pair + '"');
  const firstElfAssignments = pair.split(',')[0].split('-');
  const secondElfAssignments = pair.split(',')[1].split('-');

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

export default day4;
