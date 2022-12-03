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

export const findBadge = (threeRucksacks: string[]): string => {
  const itemsInFirst = threeRucksacks[0].split('');
  const itemsInSecond = threeRucksacks[1].split('');
  const itemsInThird = threeRucksacks[2].split('');
  const commonInFirstTwo = itemsInFirst.filter((item) =>
    itemsInSecond.includes(item)
  );
  const badge = commonInFirstTwo.find((item) => itemsInThird.includes(item));
  return badge;
};

export const groupRucksacs = (rucksacks: string[]): Array<Array<string>> => {
  return rucksacks.reduce((acc, rucksack, currentIndex) => {
    if (currentIndex % 3 === 0) {
      return [...acc, [rucksack]];
    } else {
      const last = acc.pop();
      last.push(rucksack);
      return [...acc, last];
    }
  }, []);
};

export const day3part2 = (contentsOfRucksacks: string): number => {
  const rucksacks = contentsOfRucksacks.replace(/\r/g, '').split(`\n`);
  const groups = groupRucksacs(rucksacks);
  return groups.reduce(
    (acc, group) => acc + convertItemToPriority(findBadge(group)),
    0
  );
};
