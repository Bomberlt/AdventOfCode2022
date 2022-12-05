export const day5 = (input: string): string => {
  const inputArray = input.replace(/\r/g, '').split(`\n`);
  return 'CMZ';
};
export const day5part2 = (input: string): string => {
  const inputArray = input.replace(/\r/g, '').split(`\n`);
  return 'CMZ';
};

export const parseStartingtacks = (stacksInput: string) => {
  const indexes = ' 1' + stacksInput.split('1')[1];
  const stacks = stacksInput
    .split('1')[0]
    .replace(/\r/g, '')
    .split(`\n`)
    .reverse();
  const firstStack = [];
  const secondStack = [];
  const thirdStack = [];
  stacks.forEach((line) => {
    const firstItemIndex = line.indexOf('[') + 1;
    if (firstItemIndex === 1) {
      firstStack.push(line.substring(firstItemIndex, firstItemIndex + 1));
      const remainingLine = line.substring(firstItemIndex + 2);

      const secondItemIndex = remainingLine.indexOf('[') + 1;
      if (secondItemIndex === 2) {
        secondStack.push(
          remainingLine.substring(secondItemIndex, secondItemIndex + 1)
        );
        const remainingLine2 = remainingLine.substring(secondItemIndex + 2);

        const thirdItemIndex = remainingLine2.indexOf('[') + 1;
        if (thirdItemIndex === 2) {
          thirdStack.push(
            remainingLine2.substring(thirdItemIndex, thirdItemIndex + 1)
          );
        }
      }
    } else {
      if (firstItemIndex === 5) {
        secondStack.push(line.substring(firstItemIndex, firstItemIndex + 1));
        const remainingLine = line.substring(firstItemIndex + 2);

        const secondItemIndex = remainingLine.indexOf('[') + 1;
        if (secondItemIndex === 2) {
          thirdStack.push(
            remainingLine.substring(secondItemIndex, secondItemIndex + 1)
          );
        }
      }
    }
  });
  return [firstStack, secondStack, thirdStack];
};

export default day5;
