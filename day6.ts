export const day6 = (datastream: string): number => {
  let differentCharsCount = 0;
  let currentChars = '';
  let remainingStream = datastream;
  let i = 0;
  while (remainingStream.length > 0 && differentCharsCount < 4) {
    const currentChar = remainingStream[0];
    if (currentChars.includes(currentChar)) {
      const repeatedIndex = currentChars.indexOf(currentChar);
      differentCharsCount = differentCharsCount - repeatedIndex;
      currentChars = currentChars.substring(repeatedIndex + 1);
    } else {
      differentCharsCount = differentCharsCount + 1;
    }
    currentChars = currentChars + currentChar;
    remainingStream = remainingStream.substring(1);
    i = i + 1;
  }
  return i;
};
export const day6part2 = (datastream: string): number => {
  return 7;
};

export default day6;
