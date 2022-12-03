export const day3 = (contentsOfRucksacks: string): number => {
  const rucksacks = contentsOfRucksacks.replace(/\r/g, '').split(`\n`);
  const a = containsInBoth(rucksacks[0]);
  return 157;
};
export default day3;

export const containsInBoth = (rucksack: string): string => {
  const middle = rucksack.length - 1;
  const firstCompartment = rucksack.substring(0, middle).split('');
  const secondCompartment = rucksack.substring(middle).split('');
  return firstCompartment.find((fItem) => secondCompartment.includes(fItem));
};

export const convertItemToPriority = (item: string): number => {
  return item.charCodeAt(0) > 96
    ? item.charCodeAt(0) - 96
    : item.charCodeAt(0) - 38;
};
