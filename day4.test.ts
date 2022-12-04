import { day4, pairFullyOverlaps, pairOverlaps } from './day4';
describe('day4', () => {
  describe(`input is
    2-4,6-8
    2-3,4-5
    5-7,7-9
    2-8,3-7
    6-6,4-6
    2-6,4-8`, () => {
    const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;
    it('should return 2', () => {
      const result = day4(input);

      expect(result).toBe(2);
    });
  });
  describe('Pair fully overlaps', () => {
    describe('pair is 2-4,6-8', () => {
      const pair = '2-4,6-8';
      it('should return false', () => {
        expect(pairFullyOverlaps(pair)).toBe(false);
      });
    });
    describe('pair is 6-6,4-6', () => {
      const pair = '6-6,4-6';
      it('should return true', () => {
        expect(pairFullyOverlaps(pair)).toBe(true);
      });
    });
    describe('pair is 2-8,3-7', () => {
      const pair = '2-8,3-7';
      it('should return true', () => {
        expect(pairFullyOverlaps(pair)).toBe(true);
      });
    });
    describe('pair is 23-29,5-28', () => {
      const pair = '23-29,5-28';
      it('should return false', () => {
        expect(pairFullyOverlaps(pair)).toBe(false);
      });
    });
  });
  describe('Pair overlaps', () => {
    describe('pair is 2-4,6-8', () => {
      const pair = '2-4,6-8';
      it('should return false', () => {
        expect(pairOverlaps(pair)).toBe(false);
      });
    });
    describe('pair is 6-6,4-6', () => {
      const pair = '6-6,4-6';
      it('should return true', () => {
        expect(pairOverlaps(pair)).toBe(true);
      });
    });
    describe('pair is 5-7,7-9', () => {
      const pair = '5-7,7-9';
      it('should return true', () => {
        expect(pairOverlaps(pair)).toBe(true);
      });
    });
    describe('pair is 6-6,4-6', () => {
      const pair = '6-6,4-6';
      it('should return true', () => {
        expect(pairOverlaps(pair)).toBe(true);
      });
    });
    describe('pair is 4-6,2-3', () => {
      const pair = '4-6,2-3';
      it('should return false', () => {
        expect(pairOverlaps(pair)).toBe(false);
      });
    });
  });
});
