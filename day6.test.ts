import day6 from './day6';

describe('day6', () => {
  describe('received the following datastream', () => {
    describe('mjqjpqmgbljsphdztnvjfqwrcgsmlb', () => {
      const datastream = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
      it('should return 7', () => {
        expect(day6(datastream)).toBe(7);
      });
    });
    describe('bvwbjplbgvbhsrlpgdmjqwftvncz', () => {
      const datastream = 'bvwbjplbgvbhsrlpgdmjqwftvncz';
      it('should return 5', () => {
        expect(day6(datastream)).toBe(5);
      });
    });
    describe('nppdvjthqldpwncqszvftbrmjlhg', () => {
      const datastream = 'nppdvjthqldpwncqszvftbrmjlhg';
      it('should return 6', () => {
        expect(day6(datastream)).toBe(6);
      });
    });
    describe('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg', () => {
      const datastream = 'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg';
      it('should return 10', () => {
        expect(day6(datastream)).toBe(10);
      });
    });
    describe('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw', () => {
      const datastream = 'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw';
      it('should return 11', () => {
        expect(day6(datastream)).toBe(11);
      });
    });
  });
});
