export const day6 = (datastream: string): number => {
  return getMarkerPos(datastream, 4);
};
export const day6part2 = (datastream: string): number => {
  return getMarkerPos(datastream, 14);
};

const getMarkerPos = (datastream: string, markerSize: number): number => {
  let differentCharsCount = 0;
  let currentChars = '';
  let remainingStream = datastream;
  let i = 0;
  while (remainingStream.length > 0 && differentCharsCount < markerSize) {
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

export default day6;
