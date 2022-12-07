export const day6 = (datastream: string): number => {
  return getMarkerPos(datastream, 4);
};
export const day6part2 = (datastream: string): number => {
  return getMarkerPos(datastream, 14);
};

const getMarkerPos = (datastream: string, markerSize: number): number => {
  let answer = 0;
  datastream.split('').reduce((marker, char, currentIndex, arr) => {
    if (marker.includes(char)) {
      const repeatedIndex = marker.indexOf(char);
      marker = marker.substring(repeatedIndex + 1);
    }
    if (marker.length + 1 === markerSize) {
      answer = currentIndex + 1;
      arr.splice(1); //break;
    }
    return marker + char;
  }, '');
  return answer;
};

export default day6;
