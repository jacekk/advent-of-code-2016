import { getDistance } from './taxicab'

const input = '';
const result = 0;

describe('taxicab', () => {

	it('should calculate distance from moves', () => {
		expect(getDistance(input)).toEqual(result);
		expect(getDistance('R12')).toEqual(12);
		expect(getDistance('R12, L3')).toEqual(15);
		expect(getDistance('R2, L3')).toEqual(5);
		expect(getDistance('R2, R2, R2')).toEqual(2);
		expect(getDistance('R2, R2, R2, R2')).toEqual(0);
		expect(getDistance('L22, L22, L22, L22')).toEqual(0);
		expect(getDistance('R5, L5, R5, R3')).toEqual(12);
	})

})
