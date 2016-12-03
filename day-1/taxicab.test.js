import { getDistance, getFirstVisitedTwiceDistance } from './taxicab'

describe('day 1 - taxicab', () => {

	it('should stay in place for no moves', () => {
		expect(getDistance('')).toEqual(0);
		expect(getFirstVisitedTwiceDistance('')).toEqual(0);
	})

	it('should calculate distance from moves', () => {
		expect(getDistance('R12')).toEqual(12);
		expect(getDistance('R12, L3')).toEqual(15);
		expect(getDistance('R2, L3')).toEqual(5);
		expect(getDistance('R2, R2, R2')).toEqual(2);
		expect(getDistance('R2, R2, R2, R2')).toEqual(0);
		expect(getDistance('L22, L22, L22, L22')).toEqual(0);
		expect(getDistance('R5, L5, R5, R3')).toEqual(12);
	})

	it('should calculate distance for first locations visited twice', () => {
		expect(getFirstVisitedTwiceDistance('R8, R4, R4, R8')).toEqual(4);
		expect(getFirstVisitedTwiceDistance('R2, R2, L1, L1, L10')).toEqual(3);
	})
})
