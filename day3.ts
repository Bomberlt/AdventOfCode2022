export const day3 = (contentsOfRucksacks: string): number => {
  const rucksacks = contentsOfRucksacks.replace(/\r/g, '').split(`\n`);
  return rucksacks.reduce(
    (acc, rucksack) => acc + convertItemToPriority(containsInBoth(rucksack)),
    0
  );
};
export default day3;

export const containsInBoth = (rucksack: string): string => {
  const middle = rucksack.length / 2;
  const firstCompartment = rucksack.substring(0, middle).split('');
  const secondCompartment = rucksack.substring(middle).split('');
  const result = firstCompartment.find((fItem) =>
    secondCompartment.includes(fItem)
  );
  if (!result) {
    console.log('problem in rucksack: ', rucksack);
    console.log('firstCompartment: ', firstCompartment);
    console.log('secondCompartment: ', secondCompartment);
  }
  return result;
};

export const convertItemToPriority = (item: string): number => {
  return item.charCodeAt(0) > 96
    ? item.charCodeAt(0) - 96
    : item.charCodeAt(0) - 38;
};
