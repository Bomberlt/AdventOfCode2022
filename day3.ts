// https://unicode.org/emoji/charts/full-emoji-list.html
let emojiStart = 0x1f347;

const translateGroupToEmojiFruit = (group: string[]) => {
  return group.map(translateRucksackToEmojiFruit);
};
const translateRucksackToEmojiFruit = (rucksack: string) => {
  return rucksack.split('').map(translateItemToEmojiFruit).join('');
};
const translateItemToEmojiFruit = (item: string) => {
  return translatePriorityToEmojiFruit(convertItemToPriority(item));
};
const translatePriorityToEmojiFruit = (priority: number) => {
  return String.fromCodePoint(emojiStart + priority);
};

export const day3 = (
  contentsOfRucksacks: string,
  verbal: boolean | undefined
): number => {
  const rucksacks = contentsOfRucksacks.replace(/\r/g, '').split(`\n`);
  if (verbal) console.log('rucksacks:');
  if (verbal) console.log(rucksacks.map(translateRucksackToEmojiFruit));
  return rucksacks.reduce((acc, rucksack) => {
    if (verbal)
      console.log(
        'Checking rucksack for item in both compartments:',
        translateRucksackToEmojiFruit(rucksack)
      );
    const item = containsInBothCompartments(rucksack);
    if (verbal) console.log('Item found: ', translateItemToEmojiFruit(item));
    return acc + convertItemToPriority(item);
  }, 0);
};
export default day3;

export const containsInBothCompartments = (rucksack: string): string => {
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

export const day3part2 = (
  contentsOfRucksacks: string,
  verbal: boolean | undefined
): number => {
  const rucksacks = contentsOfRucksacks.replace(/\r/g, '').split(`\n`);
  if (verbal) console.log('rucksacks:');
  if (verbal) console.log(rucksacks.map(translateRucksackToEmojiFruit));
  const groups = groupRucksacs(rucksacks);
  if (verbal) console.log('grouped rucksacks:');
  if (verbal)
    console.log(
      groups.map((group) => group.map(translateRucksackToEmojiFruit))
    );
  return groups.reduce((acc, group) => {
    if (verbal) console.log("Finding group's badge");
    if (verbal) console.log(translateGroupToEmojiFruit(group));
    const badge = findBadge(group);
    if (verbal) console.log('Badge: ', translateItemToEmojiFruit(badge));
    const priority = convertItemToPriority(badge);
    if (verbal) console.log('Priority: ', priority);

    return acc + priority;
  }, 0);
};
