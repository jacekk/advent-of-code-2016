import { isTriangleValid, countValidTriangles, countValidTrianglesVertically } from './triangles'

describe('day 3 - triangles', () => {

	it('should detect valid triangle by sides', () => {
		expect(isTriangleValid([2, 3, 4])).toBeTruthy()
		expect(isTriangleValid([4, 3, 2])).toBeTruthy()
		expect(isTriangleValid([3, 4, 2])).toBeTruthy()
		expect(isTriangleValid([300, 500, 250])).toBeTruthy()
		expect(isTriangleValid([5, 5, 5])).toBeTruthy()
	})

	it('should detect invalid triangle by sides', () => {
		expect(isTriangleValid([1, 2, 7])).toBeFalsy()
		expect(isTriangleValid([7, 2, 1])).toBeFalsy()
		expect(isTriangleValid([2, 7, 1])).toBeFalsy()
	})

	it('should count valid triangles', () => {
		expect(countValidTriangles('2 3 4')).toEqual(1)
		expect(countValidTriangles('4 3 2')).toEqual(1)
		expect(countValidTriangles('194 69 754')).toEqual(0)

		expect(countValidTriangles(`
			3 4 2
			1 2 7
			10 20 500
		`)).toEqual(1)
		expect(countValidTriangles(`
			3 4 2
			250 100 200
			20 20 30
		`)).toEqual(3)
	})

	it('should count valid triangles vertically', () => {
		const same = `
			3 4 2
			3 3 3
			2 5 7
			30 40 20
			20 50 35
			20 20 20
		`
		expect(countValidTriangles(same)).toEqual(5)
		expect(countValidTrianglesVertically(same)).toEqual(5)
	})

	it('should handle double spaces', () => {
		expect(countValidTriangles('2     3  4')).toEqual(1)
	})

})
