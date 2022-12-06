export const day6 = (datastream: string): number => {
  return getMarkerPos(datastream, 4);
};
export const day6part2 = (datastream: string): number => {
  return getMarkerPos(datastream, 14);
};

const getMarkerPos = (datastream: string, markerSize: number): number => {
  let answer = 0;
  datastream.split('').reduce((currentChars, char, currentIndex, arr) => {
    if (currentChars.includes(char)) {
      const repeatedIndex = currentChars.indexOf(char);
      currentChars = currentChars.substring(repeatedIndex + 1);
    }
    if (currentChars.length + 1 === markerSize) {
      answer = currentIndex + 1;
      arr.splice(1);
    }
    return currentChars + char;
  }, '');
  return answer;
};

export default day6;
