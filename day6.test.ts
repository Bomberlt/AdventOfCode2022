import day6 from './day6';

describe('day6', () => {
  describe('received the following datastream', () => {
    describe('mjqjpqmgbljsphdztnvjfqwrcgsmlb', () => {
      const datastream = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb';
      it('should return 7', () => {
        expect(day6(datastream)).toBe(7);
      });
    });
  });
});
